// Configuração do Supabase para o site Ouviclin
const SUPABASE_URL = 'https://pvlkipwpdosvbyjhyysn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bGtpcHdwZG9zdmJ5amh5eXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjQxMTEsImV4cCI6MjA4NTEwMDExMX0.g0L6XvzJESiaEoia9K9e_ARBUzsABbUlljnv-tyg_l4';

let supabaseClient = null;

function initSupabase() {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase inicializado com sucesso.');
        setupFormInterception();
    } else {
        console.error('Erro: Biblioteca Supabase não encontrada.');
    }
}

function setupFormInterception() {
    // Interceptar todos os formulários com a classe e_formulario
    const forms = document.querySelectorAll('form.e_formulario');
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            e.stopPropagation();

            const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.e_botao');
            const originalBtnText = submitBtn ? submitBtn.innerText : 'Enviar';
            
            if (submitBtn) {
                submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Adicionar timestamp
            data['created_at'] = new Date().toISOString();

            try {
                const { error } = await supabaseClient
                    .from('leads')
                    .insert([data]);

                if (error) throw error;

                alert('Mensagem enviada com sucesso!');
                form.reset();
            } catch (error) {
                console.error('Erro ao enviar para Supabase:', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
            } finally {
                if (submitBtn) {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            }
        }, true); // Use capture para garantir que rode antes de outros scripts
    });
}

// Correção para o erro "Cannot read properties of null (reading 'indexOf')" no js.js
// Esse erro geralmente ocorre quando o script tenta ler cookies ou elementos que não existem
window.addEventListener('load', () => {
    if (!document.cookie) {
        Object.defineProperty(document, 'cookie', {
            get: () => '',
            set: () => ''
        });
    }
});

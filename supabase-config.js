// Configuração do Supabase para o site Ouviclin
const SUPABASE_URL = 'https://pvlkipwpdosvbyjhyysn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bGtpcHdwZG9zdmJ5amh5eXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjQxMTEsImV4cCI6MjA4NTEwMDExMX0.g0L6XvzJESiaEoia9K9e_ARBUzsABbUlljnv-tyg_l4';

let supabaseClient = null;

function initSupabase() {
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('Supabase inicializado com sucesso.');
            setupFormInterception();
        } else {
            console.error('Erro: Biblioteca Supabase não encontrada.');
        }
    } catch (e) {
        console.error('Erro ao inicializar Supabase:', e);
    }
}

function setupFormInterception() {
    // Interceptar formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.onsubmit = async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.e_botao') || form.querySelector('input[type="submit"]');
            const originalBtnText = submitBtn ? (submitBtn.innerText || submitBtn.value) : 'Enviar';
            
            if (submitBtn) {
                if (submitBtn.tagName === 'INPUT') submitBtn.value = 'Enviando...';
                else submitBtn.innerText = 'Enviando...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            data['created_at'] = new Date().toISOString();
            data['page_url'] = window.location.href;

            try {
                const { error } = await supabaseClient
                    .from('leads')
                    .insert([data]);

                if (error) throw error;

                alert('Mensagem enviada com sucesso!');
                form.reset();
            } catch (error) {
                console.error('Erro Supabase:', error);
                alert('Erro ao enviar. Tente novamente.');
            } finally {
                if (submitBtn) {
                    if (submitBtn.tagName === 'INPUT') submitBtn.value = originalBtnText;
                    else submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            }
            return false;
        };
    });
}

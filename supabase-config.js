// Configuração do Supabase para o site Ouviclin
const SUPABASE_URL = 'https://pvlkipwpdosvbyjhyysn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2bGtpcHdwZG9zdmJ5amh5eXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MjQxMTEsImV4cCI6MjA4NTEwMDExMX0.g0L6XvzJESiaEoia9K9e_ARBUzsABbUlljnv-tyg_l4';

// Exemplo de inicialização (requer a biblioteca do Supabase carregada no HTML)
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

let supabaseClient = null;

function initSupabase() {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase inicializado com sucesso.');
    } else {
        console.error('Erro: Biblioteca Supabase não encontrada.');
    }
}

// Função para salvar leads ou contatos (exemplo)
async function saveLead(formData) {
    if (!supabaseClient) initSupabase();
    
    const { data, error } = await supabaseClient
        .from('leads')
        .insert([formData]);
        
    if (error) {
        console.error('Erro ao salvar lead:', error);
        return { success: false, error };
    }
    return { success: true, data };
}

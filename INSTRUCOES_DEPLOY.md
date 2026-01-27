# Instruções de Deploy - Ouviclin

Este projeto foi restaurado e configurado com integração ao Supabase.

## 1. Deploy no Vercel
O projeto já contém um arquivo `vercel.json` básico. Para fazer o deploy:
1. Conecte seu GitHub ao Vercel.
2. Selecione o repositório `ouviclin-site`.
3. O Vercel detectará automaticamente como um projeto estático.
4. Clique em **Deploy**.

## 2. Integração Supabase
O arquivo `supabase-config.js` contém as chaves que você forneceu.
- A biblioteca do Supabase é carregada via CDN no `index.html`.
- O cliente é inicializado automaticamente.
- Para salvar dados, você pode usar a função `saveLead(formData)` definida no `supabase-config.js`.

## 3. Deploy no WordPress
Como este é um site estático (HTML/CSS/JS), para usá-lo no WordPress:
- **Opção A (Recomendada):** Use o plugin "WP Static HTML Output" ou simplesmente suba a pasta para o seu servidor via FTP e aponte um subdomínio ou página para o `index.html`.
- **Opção B:** Copie o conteúdo do `index.html` para um template de página personalizado no seu tema WordPress.

## 4. Estrutura de Arquivos
- `index.html`: Página principal.
- `supabase-config.js`: Configurações da API do Supabase.
- `images/`: Pasta com todas as imagens do site.
- `vercel.json`: Configuração para o Vercel.

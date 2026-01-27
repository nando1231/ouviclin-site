# Guia de Integração: Site Estático Ouviclin em Hospedagem WordPress

**Autor:** Manus AI
**Data:** 27 de Janeiro de 2026

## Introdução

O site da Ouviclin, que consiste em um conjunto de arquivos estáticos (HTML, CSS, JavaScript e imagens), foi carregado com sucesso no repositório GitHub. O próximo passo é integrá-lo a uma hospedagem WordPress. É fundamental entender que o WordPress é um Sistema de Gerenciamento de Conteúdo (CMS) dinâmico, baseado em PHP e banco de dados, enquanto o site da Ouviclin é estático.

A integração pode ser realizada de três maneiras principais, dependendo do objetivo final e da estrutura atual do seu ambiente WordPress.

## Opções de Integração

### Opção 1: Utilizar o Site Estático como Página Inicial (Recomendado)

Esta é a opção mais limpa se o objetivo é que o site estático seja a única ou principal página visível no domínio.

#### Método A: Plugin de HTML Completo (Ex: "Insert HTML Snippet" ou "Raw HTML")

Este método permite que você insira o código HTML completo do `index.html` diretamente em uma página do WordPress, ignorando a estrutura do tema.

1.  **Instalação do Plugin:** No painel do WordPress, vá em **Plugins > Adicionar Novo** e procure por um plugin que permita a inserção de HTML bruto em páginas ou posts.
2.  **Criação da Página:** Crie uma nova página no WordPress (ex: "Home Estática").
3.  **Inserção do Código:** Abra o arquivo `index.html` do repositório. Copie **todo** o conteúdo (incluindo `<!DOCTYPE html>` e tags `<html>`, `<head>`, `<body>`). Cole este código na nova página do WordPress, utilizando o bloco de **HTML Personalizado** ou a funcionalidade do plugin escolhido.
4.  **Configuração da Página Inicial:** Vá em **Configurações > Leitura** e defina a opção "Sua página inicial exibe" para "Uma página estática", selecionando a página que você acabou de criar ("Home Estática").

**Observação:** Como o arquivo `index.html` faz referência a recursos na pasta `images/`, você precisará garantir que essa pasta e seu conteúdo estejam acessíveis no servidor.

#### Método B: Upload de Arquivos via FTP/Gerenciador de Arquivos

Este método é o mais direto para hospedar o site estático no diretório raiz, substituindo a instalação do WordPress. **Use com cautela, pois isso pode desativar o WordPress.**

1.  **Acesso ao Servidor:** Utilize um cliente FTP (como FileZilla) ou o Gerenciador de Arquivos do seu painel de hospedagem (cPanel, Plesk, etc.).
2.  **Navegação:** Vá para o diretório raiz do seu domínio (geralmente `public_html` ou `www`).
3.  **Upload:** Faça o upload do arquivo `index.html` e da pasta `images` para este diretório.
4.  **Prioridade:** O servidor web (Apache/Nginx) geralmente prioriza o arquivo `index.html` sobre o `index.php` (arquivo principal do WordPress), exibindo o site estático.

### Opção 2: Utilizar o Site Estático em um Subdiretório

Se você já tem um site WordPress funcionando e deseja que o site Ouviclin seja acessado por um endereço específico (ex: `seudominio.com.br/ouviclin/`), esta é a melhor opção.

1.  **Acesso ao Servidor:** Acesse o diretório raiz do seu domínio via FTP ou Gerenciador de Arquivos.
2.  **Criação do Subdiretório:** Crie uma nova pasta (ex: `ouviclin`).
3.  **Upload:** Faça o upload do arquivo `index.html` e da pasta `images` para dentro deste novo subdiretório (`/public_html/ouviclin/`).
4.  **Acesso:** O site estático estará acessível em `seudominio.com.br/ouviclin/`.

## Próximos Passos

O repositório no GitHub (`https://github.com/nando1231/ouviclin-site`) agora serve como a **fonte de verdade** para os arquivos do site. Você pode clonar ou baixar o conteúdo deste repositório para realizar o upload para sua hospedagem, utilizando um dos métodos descritos acima.

| Método de Integração | Cenário Ideal | Nível de Dificuldade |
| :--- | :--- | :--- |
| Plugin de HTML Completo | O WordPress precisa coexistir para outras funcionalidades (blog, e-commerce). | Médio |
| Upload via FTP (Raiz) | O site estático deve ser a única página principal do domínio. | Baixo |
| Upload via FTP (Subdiretório) | O site estático é uma seção ou landing page secundária. | Baixo |

---
*Este guia foi gerado para auxiliar na transição do site estático para o ambiente de hospedagem WordPress.*

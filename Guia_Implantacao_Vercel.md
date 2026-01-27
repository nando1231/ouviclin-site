# Guia de Implantação: Site Estático Ouviclin no Vercel

**Autor:** Manus AI
**Data:** 27 de Janeiro de 2026

## Introdução

O Vercel é uma plataforma de hospedagem de alto desempenho, ideal para sites estáticos como o da Ouviclin. A implantação é automatizada e baseada na integração com o GitHub. O repositório [nando1231/ouviclin-site](https://github.com/nando1231/ouviclin-site) já foi atualizado com um arquivo `vercel.json` para otimizar a configuração de *deploy*.

## Passo a Passo para Implantação no Vercel

Siga os passos abaixo para implantar o site em menos de 5 minutos:

### 1. Conectar e Importar o Repositório

1.  Acesse o [Vercel Dashboard](https://vercel.com/dashboard) e faça login (ou crie uma conta).
2.  Clique em **"Add New..."** e selecione **"Project"**.
3.  Selecione a opção **"Continue with GitHub"** e autorize o Vercel a acessar seus repositórios.
4.  Na lista de repositórios, localize e clique em **"Import"** ao lado de `nando1231/ouviclin-site`.

### 2. Configurar o Projeto

Na tela de configuração do projeto, o Vercel deve detectar automaticamente que se trata de um projeto HTML estático.

| Configuração | Valor Sugerido | Observações |
| :--- | :--- | :--- |
| **Root Directory** | `.` (Padrão) | O Vercel deve encontrar o `index.html` na raiz. |
| **Build Command** | *Vazio* (Padrão) | Não é necessário comando de build para HTML estático. |
| **Output Directory** | *Vazio* (Padrão) | O Vercel detecta os arquivos estáticos automaticamente. |

### 3. Implantar (Deploy)

1.  Clique no botão **"Deploy"**.
2.  O Vercel irá clonar o repositório e publicar o site.
3.  Ao final do processo, você receberá um URL de domínio `.vercel.app` onde o site estará ativo.

### 4. Configuração de Domínio Personalizado (Opcional)

Para usar seu domínio próprio (ex: `ouviclinoficial.com.br`):

1.  No painel do projeto no Vercel, vá para a aba **"Settings"** e depois **"Domains"**.
2.  Digite seu domínio e clique em **"Add"**.
3.  O Vercel fornecerá os registros DNS (geralmente um registro `A` e/ou `CNAME`) que você deve configurar no painel de controle do seu provedor de domínio (Registro.br, GoDaddy, etc.).

## Vantagens do Vercel

| Recurso | Benefício |
| :--- | :--- |
| **CDN Global** | Carregamento rápido do site em qualquer lugar do mundo. |
| **SSL Automático** | Certificado HTTPS gratuito e automático. |
| **Deploy Contínuo** | Qualquer alteração que você fizer e enviar para o branch `main` do GitHub será automaticamente implantada no Vercel. |
| **Escalabilidade** | Suporta picos de tráfego sem problemas. |

---
*Este guia foi gerado para facilitar a implantação do site estático Ouviclin no Vercel.*

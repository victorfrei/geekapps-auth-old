# ⚠️ Repositório depreciado

Este repositório é a versão **antiga (2023)** da autenticação do Geekapps, construída em Next.js com [Clerk](https://clerk.com) como provedor de identidade.

Ele foi substituído por um novo sistema de autenticação próprio (auth server, dashboard, SDKs), atualmente mantido em:

👉 **https://github.com/victorfrei/geekapps-auth**

## Por que foi depreciado

- A autenticação migrou de um provedor terceirizado (Clerk) para uma solução própria (`app-api`/`auth-api`, com suporte a OAuth, passkeys, TOTP, device flow, etc.), dando mais controle sobre o fluxo de identidade das aplicações Geekapps.
- O código deste repositório não é mais executado em produção.

## Uso

Este repositório é mantido apenas para referência histórica. Não abra PRs nem issues aqui — use o [novo repositório](https://github.com/victorfrei/geekapps-auth) para qualquer trabalho relacionado a autenticação.

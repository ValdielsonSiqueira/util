# @FIAP/util

## Descrição

Biblioteca de utilitários compartilhados entre os microfrontends da aplicação. Contém funções helpers, serviços de persistência (localStorage) e definições de tipos.

## Tecnologias

- **Language**: TypeScript.
- **Arquitetura**: Module (Single-SPA utility).
- **Build Tool**: Webpack.

## Pré-requisitos

- **Node.js**: Versão LTS.
- **Gerenciador de Pacotes**: pnpm.

## Como Rodar

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Inicie o servidor (modo watch):
   ```bash
   pnpm start
   ```

## Funcionalidades

- **Serviços de Dados**: Gerenciamento de transações e categorias no localStorage.
- **Formatadores**: Helpers para moeda, data e texto.
- **Tipagem**: Interfaces compartilhadas (Transaction, Category).

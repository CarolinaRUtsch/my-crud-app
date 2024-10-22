
# Task Manager - CRUD App

Este é um gerenciador de tarefas simples construído usando **Next.js**, **tRPC**, **Prisma**, **Tailwind CSS**, e **Shadcn UI**. A aplicação permite realizar operações de **CRUD** (Create, Read, Update, Delete) em tarefas, armazenando os dados em um banco de dados SQLite.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Como rodar o projeto](#como-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonar o Repositório](#clonar-o-repositório)
  - [Instalar Dependências](#instalar-dependências)
  - [Configurar o Banco de Dados (Prisma)](#configurar-o-banco-de-dados-prisma)
  - [Rodar o Servidor de Desenvolvimento](#rodar-o-servidor-de-desenvolvimento)
  - [Gerar a Build de Produção](#gerar-a-build-de-produção)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Next.js**: Framework React com renderização no lado do servidor.
- **TypeScript**: Superconjunto do JavaScript, adicionando verificação de tipos.
- **tRPC**: Comunicação tipo-safe entre frontend e backend.
- **Prisma**: ORM para interagir com o banco de dados.
- **Tailwind CSS**: Framework utilitário para estilização.
- **Shadcn UI**: Componentes UI estilizados com Tailwind CSS.

## Funcionalidades

- **Criar Tarefa**: Adicionar uma nova tarefa.
- **Listar Tarefas**: Ver todas as tarefas criadas.
- **Deletar Tarefa**: Excluir uma tarefa.
- **Atualizar Tarefa**: (Ainda não implementado) Editar uma tarefa.

## Como rodar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão 16+)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/CarolinaRUtsch/my-crud-app
cd my-crud-app
```

### Instalar Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

### Configurar o Banco de Dados (Prisma)

O Prisma está configurado para usar o SQLite como banco de dados. Execute a migração inicial para criar o banco:

```bash
npx prisma migrate dev --name init
```

Isso criará o banco de dados SQLite com base no schema definido no arquivo `prisma/schema.prisma`.

### Rodar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000.

### Gerar a Build de Produção

Crie a build de produção:

```bash
npm run build
```

Após a build, inicie o servidor de produção com:

```bash
npm run start
```

## Estrutura do Projeto

- **`pages/`**: Contém as rotas da aplicação, incluindo a página principal (`index.tsx`) e o endpoint da API (`api/[trpc].ts`).
- **`src/server/`**: Contém o roteador tRPC e os procedimentos de backend.
- **`prisma/`**: Contém o schema do Prisma para definição do banco de dados.
- **`styles/`**: Contém os estilos globais da aplicação.
- **`tsconfig.json`**: Configuração do TypeScript.
- **`tailwind.config.js`**: Configuração do Tailwind CSS.


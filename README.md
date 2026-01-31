# DIO REACT CLI

## Sobre o Projeto

O **DIO React CLI** é uma ferramenta de linha de comando desenvolvida para facilitar a criação e gerenciamento de projetos React, seguindo as melhores práticas do ecossistema. Com comandos simples, você pode iniciar novos projetos, adicionar dependências e automatizar tarefas comuns do desenvolvimento front-end.

---

# Sistema DIO - Clone React

Sistema completo de autenticação e feed desenvolvido com React.

## 🚀 Funcionalidades

### ✅ Páginas Implementadas

1. **Home** (`/`)
    - Página inicial com apresentação
    - Botão para começar que redireciona para login

2. **Login** (`/login`)
    - Formulário de login com validação
    - Campos: email e senha
    - Validação de campos obrigatórios
    - Verificação de credenciais no banco de dados
    - Link para criar conta

3. **Cadastro** (`/cadastro`)
    - Formulário de cadastro completo
    - Campos: nome, email e senha
    - Validações:
      - Campos obrigatórios
      - Formato de email
      - Senha mínima de 6 caracteres
      - Verificação de email duplicado
    - Criação de novo usuário no banco
    - Redirecionamento automático para login após cadastro

4. **Feed** (`/feed`)
    - Feed de posts (acesso apenas após login)
    - Cards de conteúdo
    - Ranking de usuários

## 📋 Pré-requisitos

- Node.js instalado
- Yarn instalado

## 🔧 Como Executar

### 1. Instalar dependências (se ainda não fez)
```bash
yarn install
```

### 2. Iniciar o json-server (Backend simulado)
```bash
yarn api
```
Este comando inicia o servidor na porta 8001 com o arquivo db.json

### 3. Em outro terminal, iniciar a aplicação React
```bash
yarn start
```
A aplicação será aberta em http://localhost:3000

## 🎯 Como Testar

### Testar Login
1. Acesse http://localhost:3000/login
2. Use as credenciais:
    - Email: `marcelo@email.com`
    - Senha: `123456`
3. Clique em "Entrar"
4. Você será redirecionado para o feed

### Testar Cadastro
1. Acesse http://localhost:3000/cadastro
2. Preencha os campos:
    - Nome: Seu nome completo
    - Email: seu@email.com
    - Senha: mínimo 6 caracteres
3. Clique em "Criar minha conta"
4. Você será redirecionado para a página de login
5. Faça login com as credenciais criadas

## 📦 Tecnologias Utilizadas

- React 18.2.0
- React Router DOM 6.3.0
- React Hook Form 7.33.1
- Axios 0.27.2
- Styled Components 5.3.5
- React Icons 4.4.0
- JSON Server 0.17.0

## 📝 Estrutura de Dados (db.json)

```json
{
  "users": [
     {
        "id": 1,
        "nome": "Marcelo",
        "email": "marcelo@email.com",
        "senha": "123456"
     }
  ]
}
```

Novos usuários são adicionados automaticamente ao cadastrar.

## ⚠️ Observações

- Este é um projeto educacional
- O json-server simula um backend real
- As senhas são armazenadas em texto simples (não fazer isso em produção!)
- Para uso em produção, implementar autenticação JWT e criptografia de senhas

---

## Funcionalidades

- Criação rápida de projetos React
- Geração de componentes, páginas e hooks
- Instalação automatizada de dependências
- Scripts para build, testes e lint
- Estrutura de pastas organizada

## Como Usar

1. Clone o repositório:
     ```bash
     git clone https://github.com/seu-usuario/dio-react-cli.git
     ```
2. Instale as dependências:
     ```bash
     npm install
     ```
3. Execute o CLI:
     ```bash
     npm start
     ```

## Comandos Disponíveis

- `create <nome-do-projeto>`: Cria um novo projeto React
- `generate component <nome>`: Gera um novo componente
- `generate page <nome>`: Gera uma nova página
- `add <dependência>`: Adiciona uma dependência ao projeto

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [React](https://react.dev/)
- [Commander.js](https://github.com/tj/commander.js/)
- [Chalk](https://github.com/chalk/chalk)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js/)
- [Jest](https://jestjs.io/) (para testes)
- [ESLint](https://eslint.org/) (para linting)
- [Prettier](https://prettier.io/) (para formatação de código)
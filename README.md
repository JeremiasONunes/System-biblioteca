
# Sistema de Biblioteca

Este é um projeto de gerenciamento de biblioteca desenvolvido com arquitetura de **microserviços**, utilizando tecnologias como **Node.js**, **Express**, **Sequelize**, e **SQLite**. O sistema foi projetado para ser modular, permitindo fácil expansão e manutenção. Ele inclui serviços específicos para gerenciar **usuários**, **livros** e **empréstimos**.

## Autor

**Jeremias de Oliveira Nunes**

---

## Estrutura do Projeto

A estrutura do projeto segue uma organização modular, onde cada serviço possui suas próprias configurações e funcionalidades isoladas.

```
system-biblioteca/
├── src/
│   ├── index.js                # Arquivo principal para iniciar o servidor
│   ├── config/                 # Configurações globais do projeto
│   │   └── config.json         # Configuração do Sequelize
│   ├── migrations/             # Migrações globais do banco de dados
│   ├── models/                 # Modelos globais do banco de dados
│   ├── usuarios/               # Serviço de Usuários
│   │   ├── config/             # Configuração específica do serviço de usuários
│   │   │   └── config.json
│   │   ├── controllers/        # Lógica das operações de negócio dos usuários
│   │   ├── migrations/         # Scripts de migração para o banco de dados de usuários
│   │   │   └── XXXXXX-create-usuario.js
│   │   ├── models/             # Modelos Sequelize do serviço de usuários
│   │   │   ├── index.js
│   │   │   └── usuario.js
│   │   ├── routes/             # Rotas para gerenciar usuários
│   │   │   └── usuarios.js
│   │   ├── services/           # Serviços e lógica adicional
│   ├── livros/                 # Serviço de Livros
│   │   ├── config/             # Configuração específica do serviço de livros
│   │   │   └── config.json
│   │   ├── controllers/
│   │   ├── migrations/         # Scripts de migração para o banco de dados de livros
│   │   │   └── XXXXXX-create-livros.js
│   │   ├── models/             # Modelos Sequelize do serviço de livros
│   │   │   ├── index.js
│   │   │   └── livro.js
│   │   ├── routes/
│   │   │   └── livros.js
│   │   └── services/
│   └── emprestimos/            # Serviço de Empréstimos
│       ├── config/             # Configuração específica do serviço de empréstimos
│       │   └── config.json
│       ├── controllers/
│       ├── migrations/         # Scripts de migração para o banco de dados de empréstimos
│       │   └── XXXXXX-create-emprestimos.js
│       ├── models/             # Modelos Sequelize do serviço de empréstimos
│       │   ├── index.js
│       │   └── emprestimo.js
│       ├── routes/
│       │   └── emprestimos.js
│       └── services/
├── public/                     # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/
│   │   └── styles.css          # Arquivo de estilos
│   ├── js/
│   │   └── main.js             # Arquivo JavaScript principal
│   └── images/
│       └── logo.png            # Logotipo
├── views/                      # Templates para renderizar HTML com EJS
│   ├── index.ejs               # Página inicial
│   ├── usuarios.ejs            # Página para gerenciamento de usuários
│   ├── livros.ejs              # Página para gerenciamento de livros
│   └── emprestimos.ejs         # Página para gerenciamento de empréstimos
├── .env                        # Variáveis de ambiente
├── package.json                # Configurações e dependências do projeto
└── ...                         # Outros arquivos e dependências necessárias
```

---

## Migrações e Configurações

### Configuração Geral

A pasta `config/` contém o arquivo `config.json`, que define as configurações para conexão com o banco de dados para cada ambiente (desenvolvimento, teste e produção).

### Migrações

Cada serviço possui sua própria pasta `migrations/`, onde estão os scripts responsáveis por criar ou alterar as tabelas correspondentes no banco de dados.

- **Exemplo de migração para o serviço de usuários (`usuarios`):**
  ```javascript
  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        nascimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('usuarios');
    },
  };
  ```

Cada serviço (`usuarios`, `livros` e `emprestimos`) possui seu próprio modelo e script de migração.

---

## Configuração do Ambiente Local

1. **Clone o repositório:**
   ```bash
   git clone <URL do seu repositório>
   cd system-biblioteca
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute as migrações do banco de dados:**
   ```bash
   npx sequelize-cli db:migrate
   ```

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   O servidor será iniciado na porta `3000`. Você pode acessar em `http://localhost:3000`.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no lado do servidor.
- **Express**: Framework para criação de APIs RESTful.
- **Sequelize**: ORM para integração com o banco de dados.
- **SQLite**: Banco de dados leve e eficiente.
- **EJS**: Template engine para renderização de páginas dinâmicas.

## Funcionalidades

### Serviço de Usuários
- Cadastro, atualização e exclusão de usuários.
- Busca de usuários por ID ou listagem completa.

### Serviço de Livros
- Cadastro de novos livros.
- Atualização de status de disponibilidade do livro.
- Consulta de livros disponíveis.

### Serviço de Empréstimos
- Registro de empréstimos de livros.
- Atualização de status de empréstimos.
- Listagem de empréstimos ativos.

---

## Testando a API com Insomnia ou Postman

### Serviço de Usuários

- **Método**: POST
- **URL**: http://localhost:3000/usuarios
- **Método**: GET
- **URL**: http://localhost:3000/usuarios
- **Método**: GET
- **URL**: http://localhost:3000/usuarios/id


- Body (JSON):
  ```json
  {
    "nome": "João Pedro",
    "email": "joao.pedro@example.com",
    "cpf": "12345678901",
    "nascimento": "1998-08-11"
  }
  ```

### Serviço de Livros


- **Método**: POST
- **URL**: http://localhost:3000/livro
- **Método**: GET
- **URL**: http://localhost:3000/livro
- **Método**: GET
- **URL**: http://localhost:3000/livro/id
- **Método**: PATCH
- **URL**: http://localhost:3000/livro/id
- **Método**: POST


- Body (JSON):
  ```json
  {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien"
  }
  ```

### Serviço de Empréstimos

- **URL**: http://localhost:3000/emprestimo
- **Método**: GET
- **URL**: http://localhost:3000/emprestimo
- **Método**: GET
- **URL**: http://localhost:3000/emprestimo/id
- **Método**: PUT
- **URL**: http://localhost:3000/emprestimo/id
- 
- Body (JSON):
  ```json
  {
    "usuarioId": 1,
    "livroId": 1,
    "dataEmprestimo": "2024-12-03T10:00:00Z"
  }
  ```

---

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. **Crie uma nova branch:**
   ```bash
   git checkout -b minha-nova-feature
   ```

2. **Faça suas alterações e adicione os commits:**
   ```bash
   git add .
   git commit -m "Descrição da minha nova feature"
   ```

3. **Envie sua branch para o repositório remoto:**
   ```bash
   git push origin minha-nova-feature
   ```

4. **Abra um pull request no repositório original.**

5. **Neste projeto foram construido apenas os microserviços, ainda está em produção o front- end**

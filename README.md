# Sistema de Biblioteca

Este é um projeto de gerenciamento de biblioteca baseado em uma arquitetura de micro serviços, desenvolvido com Node.js, Express, Sequelize e SQLite. O sistema é modular e inclui serviços para gerenciar usuários, livros e empréstimos.

## Autoria
**Jeremias de Oliveira Nunes**

## Estrutura do Projeto

A estrutura do projeto é organizada em pastas distintas para cada serviço:

```
System-biblioteca/
├── src/
│   ├── index.js                # Arquivo principal do servidor
│   ├── usuarios/               # Serviço de Usuários
│   │   ├── config/
│   │   │   └── config.json     # Configuração do Sequelize
│   │   ├── controllers/
│   │   ├── migrations/
│   │   │   └── XXXXXX-create-usuario.js
│   │   ├── models/
│   │   │   ├── index.js
│   │   │   └── usuario.js      # Modelo do Usuário
│   │   ├── routes/
│   │   │   └── usuarios.js     # Rotas de Usuários
│   │   ├── services/
│   ├── livros/                 # Serviço de Livros (não implementado)
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   │   └── livros.js
│   │   └── services/
│   └── emprestimos/            # Serviço de Empréstimos (não implementado)
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       │   └── emprestimos.js
│       └── services/
├── public/                     # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/
│   │   ├── styles.css          # Arquivo de estilos - Não implementada
│   ├── js/
│   │   ├── main.js             # Arquivo JavaScript principal - Não implementada
│   └── images/
│       └── logo.png            # Imagem de logotipo - Não implementada
├── views/                      # Arquivos de visualização (páginas HTML)
│   ├── index.ejs              # Página inicial - construção inicial não finalizada.
│   ├── usuarios.ejs           # Página para gerenciar usuários - Não implementada
│   ├── livros.ejs             # Página para gerenciar livros - Não implementada
│   └── emprestimos.ejs        # Página para gerenciar empréstimos - Não implementada
├── .env                        # Variáveis de ambiente 
├── package.json                # Configurações e scripts do projeto
└── ... (outros arquivos e pastas)
```

## Requisitos

- Node.js
- NPM (Node Package Manager)
- SQLite

## Configuração Local do Projeto

1. **Clone o repositório:**
   ```bash
   git clone <URL do seu repositório>
   cd sistema-biblioteca
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o arquivo de variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente, se necessário.

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   O servidor será iniciado na porta 3000.

## Uso com Insomnia

Para testar a API utilizando o Insomnia, você pode fazer as seguintes requisições:

### Serviço de Usuários

#### Cadastrar um novo usuário

- **Método**: POST
- **URL**: `http://localhost:3000/usuarios`
- **Body** (JSON):
  ```json
  {
    "nome": "joao pedros",
    "email": "joao.pedrop@example.com",
    "cpf": "12345678901",
    "nascimento": "1998-08-11"
  }
  ```

#### Listar todos os usuários

- **Método**: GET
- **URL**: `http://localhost:3000/usuarios`

#### Buscar um usuário específico por ID

- **Método**: GET
- **URL**: `http://localhost:3000/usuarios/:id`
  - Substitua `:id` pelo ID do usuário que deseja buscar.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Crie uma nova branch, faça suas alterações e envie um pull request.



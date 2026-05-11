Catálogo de Produtos — API REST

API RESTful desenvolvida com Node.js, Express e MongoDB, com autenticação JWT e proteção contra NoSQL Injection.

---

Tecnologias Utilizadas

Node.js — Ambiente de execução JavaScript
Express — Framework para criação da API
MongoDB — Banco de dados NoSQL
Mongoose — ODM para modelagem de dados
bcryptjs — Criptografia de senhas
jsonwebtoken — Autenticação via JWT
express-mongo-sanitize — Proteção contra NoSQL Injection
dotenv — Gerenciamento de variáveis de ambiente

---

Estrutura do Projeto

```
src/
├── config/
│   └── database.js          # Conexão com o MongoDB
├── controllers/
│   ├── authController.js    # Lógica de Registro e Login
│   └── productController.js # Lógica do CRUD de Produtos
├── middleware/
│   └── auth.js              # Verificação do token JWT
├── models/
│   ├── User.js              # Schema de Usuário
│   └── Product.js           # Schema de Produto
└── routes/
    ├── authRoutes.js        # Rotas de autenticação
    └── productRoutes.js     # Rotas de produtos
server.js                    # Entrada da aplicação
```

---

Como Rodar o Projeto

Pré-requisitos

[Node.js](https://nodejs.org) (v18 ou superior)
[MongoDB](https://www.mongodb.com) rodando localmente ou conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
[Git](https://git-scm.com)

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

Copie o arquivo de exemplo e preencha com seus dados:

```bash
cp .env.example .env
```

Edite o `.env` com suas configurações:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/catalogo_produtos
JWT_SECRET=sua_chave_secreta_aqui
```

4. Inicie o servidor

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

---

Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| PORT | Porta do servidor | 3000 |
| MONGODB_URI | String de conexão do MongoDB | mongodb://localhost:27017/catalogo_produtos |
| JWT_SECRET | Chave secreta para geração de tokens JWT | minha_chave_super_secreta |

> Nunca exponha o arquivo .env o repositório. Ele está listado no .gitignore.

---

Endpoints da API

Autenticação

POST /api/auth/register — Registrar usuário

Body (JSON):
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}
```

Resposta (201):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

---

`POST /api/auth/login` — Fazer login

Body (JSON):
```json
{
  "email": "joao@email.com",
  "password": "123456"
}
```

Resposta (200):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}
```

---

Produtos

> Todas as rotas de produtos exigem autenticação.  
> Adicione o header: `Authorization: Bearer SEU_TOKEN`

---

POST /api/products — Criar produto

Body (JSON):
```json
{
  "name": "Notebook Dell",
  "description": "Notebook para uso profissional",
  "price": 3500,
  "category": "eletronicos",
  "stock": 10,
  "attributes": {
    "cor": "prata",
    "processador": "Intel i7"
  }
}
```

Resposta (201):Objeto do produto criado.

---

GET /api/products — Listar todos os produtos

Resposta (200): Array com todos os produtos cadastrados.

---

GET /api/products/:id — Buscar produto por ID

Parâmetro: id — ID do produto no MongoDB

Resposta (200): Objeto do produto encontrado.

---

PUT /api/products/:id — Atualizar produto

Body (JSON): Campos que deseja atualizar.
```json
{
  "price": 3200,
  "stock": 8
}
```

Resposta (200): Objeto do produto atualizado.

---

DELETE /api/products/:id — Deletar produto

Resposta (200):
```json
{
  "message": "Produto deletado com sucesso."
}
```

---

Segurança

Senhas criptografadas com bcryptjs (salt rounds: 12)
Autenticação via JWT com expiração de 7 dias
Proteção contra NoSQL Injection com express-mongo-sanitize
Validações obrigatórias nos Schemas do Mongoose

---

GitFlow

```
main        → versão estável e pronta para produção
develop     → integração de novas funcionalidades
feature/*   → desenvolvimento de requisitos específicos
```

Exemplo de fluxo:
```bash
git checkout -b feature/crud-produtos
# desenvolve...
git checkout develop
git merge feature/crud-produtos
git checkout main
git merge develop
```

---

Padrão de Commits

| Prefixo | Uso |
|---------|-----|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `chore:` | Configurações e dependências |
| `refactor:` | Refatoração de código |

---

Autor

Desenvolvido por Murilo Ressler Garcez como trabalho prático da disciplina de Criação de Sites II.

# Book Register Study

Um projeto de estudo desenvolvido com **NestJS**, focado no aprendizado e aplicação prática de **Clean Architecture** (Arquitetura Limpa). A aplicação consiste em um sistema de gerenciamento de empréstimo e registro de livros.


---

## Objetivo do Projeto

O principal objetivo deste repositório é explorar a separação de responsabilidades e desacoplamento do código seguindo os princípios de Clean Architecture no ecossistema NestJS, organizando as funcionalidades em **Entities**, **Use Cases**, **Repositories**, **DTOs** e **Controllers**.

A aplicação permite:
- Cadastrar e gerenciar usuários.
- Cadastrar e gerenciar livros.
- Registrar o empréstimo de livros para usuários.

---

## Tecnologias Utilizadas

- **Node.js** & **TypeScript**
- **NestJS v12** — Framework para construção de aplicações backend eficientes e escaláveis.
- **TypeORM** — ORM para integração e gerenciamento do banco de dados.
- **Better-SQLite3** — Banco de dados SQLite de alta performance para ambiente de desenvolvimento.
- **Oxlint** & **Prettier** — Linter e formatador de código para garantia de padronização.

---

## Estrutura do Projeto (Clean Architecture)

O código fonte está organizado por domínios de negócio, mantendo uma divisão clara entre regras de negócio, dados e camada de apresentação:

```text
src/
├── book/                  # Módulo de Livros
│   ├── dto/               # Data Transfer Objects (Validação de entrada)
│   ├── entities/          # Entidades de Domínio
│   ├── repository/        # Interfaces e Implementações de Repositório
│   ├── use-case/          # Casos de Uso (Regras de negócio)
│   ├── book.controller.ts # Camada HTTP (Rotas)
│   └── book.module.ts     # Módulo NestJS
├── borrow/                # Módulo de Empréstimos
│   ├── dto/
│   ├── entities/
│   ├── repository/
│   ├── use-cases/
│   ├── borrow.controller.ts
│   └── borrow.module.ts
└── user/                  # Módulo de Usuários
    ├── dto/
    ├── entities/
    ├── repository/
    ├── use-case/
    ├── user.controller.ts
    └── user.module.ts
```

---

## Rotas da API (Endpoints)

### Livros (`/book`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/book` | Cadastra um novo livro |
| `GET` | `/book` | Lista todos os livros |
| `GET` | `/book/:id` | Busca um livro por ID |
| `PATCH` | `/book/:id` | Atualiza dados do livro |
| `PATCH` | `/book/:id/delete` | Altera status/remove logicamente o livro |

### Usuários (`/user`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/user` | Cadastra um novo usuário |
| `GET` | `/user` | Lista todos os usuários |
| `GET` | `/user/:id` | Busca um usuário por ID |
| `PATCH` | `/user/:id` | Atualiza dados do usuário |
| `PATCH` | `/user/:id/delete` | Altera status/remove logicamente o usuário |

### Empréstimos (`/borrow`)
| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/borrow` | Registra o empréstimo de um livro para um usuário |

---

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/book-register-study.git
   cd book-register-study
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento:**
   ```bash
   npm run start:dev
   ```

4. **Acesse a aplicação:**
   A API estará rodando por padrão em `http://localhost:3000`.

---

## Outros Comandos Úteis

- **Formatador de código:**
  ```bash
  npm run format
  ```
- **Linter:**
  ```bash
  npm run lint
  ```
- **Build de produção:**
  ```bash
  npm run build
  ```

---

<p center="align">Desenvolvido para fins de estudo de Clean Architecture com NestJS 🚀</p>
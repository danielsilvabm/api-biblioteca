#  API Biblioteca

API para gerenciar uma biblioteca, permitindo cadastrar e consultar **autores, livros, usuários** e controlar **empréstimos**.

---

##  Funcionalidades

- **Usuários:** cadastrar e listar.  
- **Autores:** cadastrar e listar.  
- **Livros:** cadastrar e listar, associados a autores.  
- **Empréstimos:** realizar empréstimos, verificando disponibilidade do livro e atualizando a data de devolução.

---

##  Endpoints

| Recurso   | Método | Rota       | Descrição                 

| Usuários  | POST   | /users     | Cadastrar usuário         
|           | GET    | /users     | Listar usuários           
| Autores   | POST   | /authors   | Cadastrar autor           
|           | GET    | /authors   | Listar autores            
| Livros    | POST   | /books     | Cadastrar livro           
|           | GET    | /books     | Listar livros             
| Empréstimos | POST | /loans     | Realizar empréstimo       

---

##  Exemplos de requisição

**Cadastrar usuário**
```json
{
  "name": "João Silva",
  "birthDate": "1995-04-10",
  "sex": "M",
  "address": "Rua A, 123"
}


**Cadastrar autor**

{
  "name": "Machado de Assis",
  "birthDate": "1839-06-21",
  "sex": "M",
  "writingGenre": "Novel"
}


**Cadastrar livro**
{
  "title": "Dom Casmurro",
  "synopsis": "Um clássico da literatura brasileira.",
  "year": 1899,
  "author": "ID_DO_AUTOR"
}


**Realizar empréstimo**

{
  "user": "ID_DO_USUARIO",
  "book": "ID_DO_LIVRO"
}


## Como rodar

Instalar dependências:

npm install


Criar arquivo .env:

PORT=3333
MONGO_URI=mongodb://localhost:27017/biblioteca


Rodar servidor:

npm run dev



## Resetar banco

Para limpar todas as coleções e começar do zero:

npm run collections
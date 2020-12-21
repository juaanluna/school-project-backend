# Projeto escola

Sistema para gerenciar escola, turmas e alunos.

### Começando
É necessária a configuração do projeto antes de inicia-lo.

* **Passo 1:** Configurar .env *(Usar [.env.example](https://github.com/juaanluna/school-project-backend/blob/master/.env.example) como exemplo)*
* **Passo 2:** Criar uma tabela em seu banco de dados com o mesmo nome definido no .env
* **Passo 3:** Para instalar todas as dependências:
```
npm install
```
* **Passo 4:** Comando para rodar as migrations e para iniciar o projeto:
```
npm run dev
```

### Testar rotas

O arquivo [documentação](https://github.com/juaanluna/school-project-backend/blob/master/documentation/viaMaker.postman_collection.json) é um JSON com todas as rotas para serem utilizadas no postman

### Aplicação
O que foi aplicado nesse projeto?

* **ORM - Sequelize***
* **Autenticação**
* **Recuperação de senha**
* **Envio de e-mail com Nodemailer**
* **Crud de usuários**
* **Crud de escolas**
* **Crud de turmas**
* **Crud de alunos**


### Estrutura

* Crud de usuários
* Crud de escolas
* Crud de turmas
* Crud de alunos

Relações entre tabelas:

* 1 ESCOLA possui N TURMAS
* 1 TURMA possui N ALUNOS

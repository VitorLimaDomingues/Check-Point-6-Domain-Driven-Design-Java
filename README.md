# Check-Point 6 - Domain Driven Design Java

## Grupo: Stack-Society

## Integrantes

- Caio Berardo de Araújo (RM: 560357)
- Giovanni Romano Provazi (RM: 560434)
- Vitor de Lima Domingues (RM: 561008)

---

# Tecnologias utilizadas

## Front-end

- React
- TailwindCSS
- Axios

## Back-end

- Spring Boot
- Maven
- MySQL

---

# Como iniciar o Front-end

1. Abra a pasta do front-end:

`cd Frontend-CP6/frontend`

2. Instale as dependências:

`npm install`

3. Inicie o projeto:

`npm run dev`

---

# Como iniciar o Back-end

1. Primeiro crie um banco de dados no MySQL usando:

`CREATE DATABASE cp6_ddd;`

2. Abra o arquivo:

`src/main/resources/application.properties`

2. Configure sua senha do MySQL:

`spring.datasource.password=SUA_SENHA`

3. Inicie a aplicação:

`src/main/java/br/com/fiap/cp6ddd/Cp6DddApplication`

---

# Observações

- O projeto utiliza Java SDK 25.
- O banco de dados utilizado foi MySQL.
- O sistema possui CRUD completo para:
  - Clientes
  - Vendedores
  - Atendentes
  - Prospectantes
  - Usuários
  - Contratos
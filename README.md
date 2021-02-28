# NPS API
 NLW#4 - Trilha Node.js - API cálculo NPS

## 🎯 Propósito:
API de cálculo de NPS (Net Promoter Score) com:
- Simulação de cadastro de usuário;
- Cadastro administrativo de perguntas para pesquisa de satisfação;
- Envio de fake e-mail com as perguntas do admin para o usuário;
- Utilização de banco de dados;
- CSS, HTML para montagem da interface da pergunta com nota de 0 a 10
- Processamento das pesquisas para o cálculo no NPS 

Esse cálculo ajudará a avaliar como uma empresa está sendo vista no mercado. Um NPS alto indica boa qualidade de atendimento aos clientes.
Um NPS baixo indica que a empresa precisa melhorar de alguma forma.
Assim a empresa consegue ter ações em cima desse indicador calculado.

## ⚙ Aula 1 - Estrutura básica do server
(...)

## 💾 Aula 2 - Sobre banco de dados

### Formas de inserir o banco de dados na aplicação:
  1) ORM, como TypeORM [https://typeorm.io](https://typeorm.io) ou Sequelize [https://sequelize.org/](https://sequelize.org/);

  2) Query builder, como Knex: [https://knexjs.org](https://knexjs.org)

  3) Driver nativo, como Postgres: [https://node-postgres.com](https://node-postgres.com)

### Com TypeORM:

  ```shell
  yarn add typeorm reflect-metadata
  ```

### Com SQLite:

  ```shell
  yarn add sqlite3
  ```
  
### 🚌 Migrations com TypeORM:

  Testar:
  ```shell
  yarn typeorm
  ```

  Criando, por exemplo, uma migration nomeada *CreateUsers*:
  ```shell
  yarn typeorm migration:create -n CreateUsers
  ```

  Criando a migration de Pesquisas:
  ```shell
  yarn typeorm migration:create -n CreateSurveys
  ```

  Inserir em *ormconfig.json* o caminho das migrations:
  ```json
    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/models/**.ts"],
    "loggin": true,
  ```

  Rodar migration definda:
  ```shell
  yarn typeorm migration:run
  ```

  Rollback da migration:
  ```shell
  yarn typeorm migration:revert
  ```

## 🔎 Para visualizar as tabelas do Sqlite:

  1) Aplicativo desktop [Beekeeper Studio](https://www.beekeeperstudio.io/)
  
  2) No VSCode a extensão [alexcvzz.vscode-sqlite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)


## 😎 Models:

Em *tsconfig.json* habilitar as seguintes opções:

```json
"strictPropertyInitialization": false,
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
```

NOTA: _strictPropertyInitialization_ como *false* define que não será responsabilidade da classe (model) a inicialização dos atributos, pois vamos inicializar no controller com nosso repositório.

## 🧩 Dependências:

### UUID:

```shell
yarn add uuid
yarn add @types/uuid -D
```

## ⌨ Atalhos VSCode:

*Organize imports [ Alt+Shift+O ]* - Remove _imports_ não utilizados no código;

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

## Testes Automatizados

### 1 - Testes unitários

  - São testes para verificar determinada funcionalidade da aplicação (Um serviço, uma função específica);

  - Indicado para aplicações backend;

  - Indicado para [TDD (Test Driven Development - Desenvolvimento Orientado por Testes)](https://www.techlise.com.br/blog/tudo-o-que-voce-precisa-saber-sobre-tdd/#:~:text=TDD%20%C3%A9%20a%20sigla%20para,deles%2C%20um%20teste%20%C3%A9%20aplicado.)

  - Usa-se dados fake;

### 2 - Testes de integração

  - Aqui se testa a funcionalidade completa da aplicação;

  - Indicado para aplicações backend;

  - Exemplo, supondo que vamos testar a criação de um usuário. Para isso vamos considerar o fluxo:

  ```
  -> request -> routes -> controller -> repository
  <- repository <- controller <- response
  ```

  - É o que vamos estudar nessa aula;

### 3 - Teste Ponta a Ponta ((E2E - End to End)[https://blog.cedrotech.com/teste-end-to-end/#:~:text=O%20teste%20end%2Dto%2Dend,projeto%20do%20in%C3%ADcio%20ao%20fim.&text=Resumindo%2C%20o%20teste%20end%2Dto,completa%20simulando%20o%20ambiente%20real.])

  - Aqui se testa toda a ação do usuário na aplicação;

  - É mais utilizado para aplicações front-end;

  - Exemplo, supondo um frontend com um formulário com nome e email, se testa:

    1) Usuário digitou os dados no campo;

    2) Usuário clicou em cadastrar;

    3) Usuário esperou a página recarregar (ou alguma coisa...);

Existem também testes onde um time de (QA - (Quality Assurance - Garantia de Qualidade))[https://blog.cedrotech.com/o-qa-dentro-de-um-time-agil-scrum/#:~:text=QA%2C%20do%20ingl%C3%AAs%20Quality%20Assurance,entregue%20com%20a%20qualidade%20esperada.&text=Scrum%20Master%3B,Time%20de%20Desenvolvimento.] utiliza um abiente de desenvolvimento, um ambiente de testes, salvando na aplicação, fazendo acesso ao banco de dados, etc, de uma forma um pouco mais real. Nesse tipo de teste há interação humana de estar criando os cenários. Diferente dos tipos de testes anteriores onde se faz rodando um comando.

## 🛠 Ferramentas de Testes:

  ### Jest

  - (Documentação)[https://jestjs.io/docs/en/getting-started];

  - Instalação:
  ```shell
  yarn add jest @types/jest ts-jest -D
  ```

  - Criando arquivo de configuração:
  ```shell
  yarn jest --init
  ```
  1) Responder *yes* para definir um script de teste em _package.json_;

  2) Responder *yes* para utilizar Typescript;

  3) Responder *node* como ambiente;

  4) Podemos responder *no* para _coverage report_ (que mostra pontos importantes na aplicação onde podemos cobrir de testes, como blocos _try catch_)

  5) Responder *v8*;

  6) Responder *yes* para limpar as chamadas entre cada teste;


  - Em *jest.config.ts* configurar:

  ```ts
  bail: true, // para interromper a sequência de testes caso um teste falhar

  // testEnvironment: "node",  // vamos deixar desabiliatdo

  testMatch: ["**/__tests__/*.test.ts"], // habilitar para especicar o caminho dos nossos testes, que podem estar em várias pastas

  preset: "ts-jest",
  ```

  - Estrutura do arquivo de teste:
  (...)

  - Rodando os testes:
  ```shell
  yarn test
  ```

  ## Supertest
  
  O (Supertest)[https://www.npmjs.com/package/supertest] é uma ferramenta para testes de integração.

  Instalação:
  ```shell
  yarn add supertest @types/supertest -D
  ```

  ### Variáveis de ambiente no Windows
  
  (How can I set NODE_ENV=production on Windows?)[https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows]

  - Scripts para Windows:
  
  ```json
  {"scripts": {
    "test": "set NODE_ENV=test&&jest",
    "posttest": "del \".\\src\\database\\database.test.sqlite\"",
  }}
  ```

- Scripts para Linux:
  
  ```json
  {"scripts": {
    "test": "NODE_ENV=test jest",
    "posttest": "rm ./src/database/database.test.sqlite"
  }}
  ```

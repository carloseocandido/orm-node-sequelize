# Estudo de ORM em Node.js com Sequelize e MySQL

Este repositório é dedicado ao estudo de Mapeamento Objeto-Relacional (ORM) em Node.js, utilizando a biblioteca Sequelize em conjunto com o sistema de gerenciamento de banco de dados MySQL. O objetivo deste projeto é fornecer um guia passo a passo e exemplos práticos para ajudar você a aprender como usar o Sequelize para interagir com bancos de dados MySQL em seus aplicativos Node.js.

## Pré-requisitos

Antes de começar, você deve ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v14)
- [NPM](https://www.npmjs.com/) (v6)
- [MySQL](https://www.mysql.com/) (v5.7) instalado e configurado
## Instalação

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/carloseocandido/orm-node-sequelize

2. Navegue até o diretório do projeto::
     ```bash
   cd nome-da-pasta

3. Instale as dependências do projeto:
     ```bash
   npm install
     
4. Configure o arquivo config.json com os dados do seu banco mysql local que se encontra na pasta:
     ```bash
   src/config/config.json

5. Execute as migrações para criar as tabelas e popular o banco de dados:
     ```bash
   npm run repopulate


## Uso
Neste projeto, você encontrará exemplos de como usar o Sequelize para realizar operações básicas de CRUD (Criar, Ler, Atualizar, Excluir) em um banco de dados MySQL. Explore os seguintes diretórios:

- models: Contém os modelos Sequelize que definem a estrutura das tabelas no banco de dados.
- migrations: Contém os arquivos de migração para criar e modificar tabelas no banco de dados.
- controllers: Demonstração de como criar controladores para manipular as operações do banco de dados.
- routes: Exemplos de rotas para acessar as funcionalidades CRUD.
- config: Arquivos de configuração do Sequelize e conexão com o banco de dados.

##  Contribuição
Sinta-se à vontade para contribuir com este projeto, abrindo problemas (issues) ou enviando solicitações de pull (pull requests). Se você tiver sugestões de melhorias, correções de bugs ou novos recursos, adoraria ouvir sua opinião!

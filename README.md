# Application Setup LESSON 3.3 CITY

It is a sequelize example using one table. In .env file you will see dialect
`DIALECT=mssql`
and in index.js

```bash
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.ADMIN_USERNAME,
  process.env.ADMIN_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    dialectOptions: {
      encrypt: true, //FOR MSSQL
    },
  }
);
```

You can easily change the database type to MySQL, PostgreSQL, or MSSQL by updating the DIALECT variable in the .env file. Thanks to Sequelize, you do not need to modify your CRUD models, only the dialect.

## 1- CREATE EXPRESS

`npx express-generator --view=ejs`

## 2- INSTALL DEPENDENCIES

`npm install`

## 3- FIX VULNERABILITIES

`npm audit fix --force `

## 4- ADD PACKAGES

` npm install mssql sequelize msnodesqlv8 dotenv`

After installing these dependencies, msnodesqlv8 should install with:

`npm install msnodesqlv8`

## 5- CREATE .ENV

```bash
ADMIN_USERNAME=<your-database-admin-name>
ADMIN_PASSWORD=<password>
DATABASE_NAME=<your-database-name>
HOST=<provided-by-your-azure-service.windows.net>
DIALECT="mssql"
PORT=<your port>
```

- do not forget to add .gitignore

## 6- CREATE MODELS

## 7- CREATE SERVICE FILE

## 8- ADD ROUTES

## 9- POSTMAN

you can use postman to test your endpoint

- GET ALL CITIES : it has a view so not json

`http://localhost:3000/cities `

- CREATE A CITY POST
  `http://localhost:3000/cities `
  `{
    "Name":"Berlin",
    "Country":"Germany"
}`
- UPDATE A CITY PUT

`http://localhost:3000/cities`

`{
    "oldCityName": "Oslo",
    "oldCountryName": "Norway",
    "newCityName": "New Oslo",
    "newCountryName": "New Norway"
}`

- DELETE A CITY DELETE
  `http://localhost:3000/cities`

`
{
"Name":"Oslo"

}

`

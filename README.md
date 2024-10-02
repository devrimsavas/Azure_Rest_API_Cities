# Application Setup LESSON 3.3 CITY

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

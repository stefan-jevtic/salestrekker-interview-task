# Salestrekker interview task

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Stack Used for task:
    1. Web service via Node.js and Koa.js framework for serving SPA.
    2. Apollo/GraphQL API for data manipulation.
    3. Mysql database with sequelize ORM.
    4. Application UI and frontend logic via React.js
    5. BabelJS
    6. Webpack
    7. Prettier

### Installing

1. Clone the repo

`git clone https://github.com/stefan-jevtic/salestrekker-interview-task.git`

2. Install dependecies

`npm install`

3. Import database 

```
mysql -u root -p
mysql> CREATE DATABASE new_database;
exit;
mysql -u <username> -p new_database < salestrekker_task.sql
```

4. Create your own .env file in project root and set environment variables, as reference use .env.example.

5. Generate bundle.js file by running

`npm run dev`

or

`npm run build`

6. Start server

`npm run start`

7. Open in browser http://localhost:4000

## App walkthrough
App has 4 pages: home, add new lead, edit/delete leads and login.
On home page are listed all leads (both Persons and Companies) in table. Add new page are for adding new Lead, there are two radio buttons and by clicking on one of them form for inserting new lead renders. There are two forms, one for Person and other for Comapny, which will be rendered depends on which option are selected. By submitting form, new user is inserted. On Edit/Delete page there are the same logic with radio buttons but, instead of rendering forms for adding users it renders tables with data of choosen type of lead. Table has editable cells and by double clicking on them edit mode is enabled, data will be saved and updated in database by removing focus from cell, onBlur event. On the left side of tables there is checkboxes for deleting leads, you can select multiple leads for deleting or just one. By clicking on Delete button, selected rows will be deleted from database. Login page is for login employees. There are two roles in system: employee and manager, only manager can add, edit, delete leads. Credentials for manager account: email - admin@admin.com, password - admin123

## Author
 **Stefan Jevtic**
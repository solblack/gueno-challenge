# APP for Gueno Challenge

This project contains 2 folders: one containing the API project and another one containing the Interface project.
Here are the instructions to install and run both projects to get this APP up and running!

After you clone the repository on your computer, you will have the repository folder locally, containing two folders: "api-node" folder and the "front-end-app" folder. You will need to enter the "api-node" folder and then follow the instructions inside the README file included in that folder (I will leave the instrucctions on this README file as well). After you do that, you will have the API project up and running.

To install and run the Interface/front-end app project, you need to enter the folder "front-end-app" and then follow the instructions inside the README file included in that folder (I will also leave the instrucctions on this README file as well).

# api-node

API for Gueno Challenge made using Express framework

-   Run "npm install" or "npm i" to install dependencies

-   Create .env file using the .env.example as a model. Here you need to add your local configuration (is recommended to leave the same settings as the .env.example file).

-   To start the server, run "npm run start". This will run the command "nodemon app.js --exec babel-node --". This project uses ES6, so Babel and Nodemon will be needed to run the app.

-   To check the documentation for this API, go to http://localhost:3000 (after starting the server). IMPORTANT: the URL will be different if you set a HOST and PATH different than "localhost" and "3000" on the .env file

# front-end-app

Front-end app made using Angular Framework for Gueno Challenge

-   Run "npm install" or "npm i" to install dependencies

-   Run "npm start"

-   Open your browser and go to http://localhost:4200 to open the Angular app

-   Once you enter the app on the browser, you will see a single page app where you can enter a DNI number (Argentina's ID card number) and it will show you the credit score for the person associated to that DNI.
    (You can use this dni test cases: 11111111 and 99999999)

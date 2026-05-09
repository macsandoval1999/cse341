// 1. Imports
const homeRouter = require('./routes/index.js');
const express = require('express');



// 2. Instantiate Express
const app = express();



// 3. Initial Route Paths
app.use('/', homeRouter);



// 4. Dev Server Setup
const port = 3000;
app.listen(process.env.PORT || port);
console.log(`Web server is listening on port http://localhost:${process.env.PORT || port}`);



/*
1.
const express = require('express'); 
---------------------------------------------------
require() is a built-in function in Node.js that allows you to import modules from your node_modules directory or from your own files. Remember how we used it to import files and packages in WDD340?

The order of these imports is not strictly important, but it is common practice to import third-party modules (like express) before your own modules (like lesson1Controller). This way, you can easily see which external dependencies your code relies on before looking at your own code. In my case, I imported the lesson1Controller first, but it would work just fine if I imported express first. The key point is that you need to import both the express module and your lesson1Controller module in order to use them in your server.js file.

If we were using functions from the lesson1Controller in our server.js file, we would need to import the controller as well. However, in this specific code snippet, we are not directly using any functions from lesson1Controller in server.js.

Here's why we need these imports:
    - homeRouter: This is the router module that we created in routes/index.js. It contains the route definitions for our home page. By importing it, we can use it to define our routes in server.js and keep our code organized.
    - express: This is the main framework we are using to create our web server. It provides a lot of functionality for handling HTTP requests, defining routes, and managing middleware. We need to import it so that we can use its features to build our server.



2.
const app = express();
----------------------------------------------------------
After importing the Express module, we can create an instance of it by calling the express() function. This instance is an object that has methods for defining routes and handling requests. Literally, express already comes with built-in tools to handle HTTP requests and responses, so we can use it to create a web server without needing to write a lot of code from scratch. Again, remember WDD340.



3. 
app.use('/', homeRouter);
-----------------------------------------------------------
app.use() is a method provided by Express that allows you to define middleware functions that will be executed for every incoming request. In this case, we are using it to set up our routes. The first argument '/' specifies the base path for the routes defined in the index.js file. This means that any routes defined in index.js will be accessible starting from the root URL of our server. For example, if index.js defines a route for '/emily', it will be accessible at http://localhost:3000/emily. By using app.use() with the require() function, we are telling our Express app to use the routes defined in the index.js file whenever a request is made to the root URL or any sub-paths defined in that file. This helps keep our server.js file clean and organized by separating our route definitions into a separate module.
In the server.js file, we set up which base path to use. In our other project, we set up paths for /, /inventory, and /account. In our project, these were pages with different content, so it made sense to separate their routes into different files.



4. 
const port = 3000;
app.listen(process.env.PORT || port);
------------------------------------------------------------
First we define a constant variable called port and assign it the value of 3000. This is the port number that our web server will listen on for incoming requests.
Then we call the listen() method on our Express app instance, passing in the port number. This tells our web server to start listening for incoming requests on that port. In other words, when you run this code, your web server will be up and running and ready to handle requests on port 3000. You can access it by going to http://localhost:3000/ in your web browser.



6.
console.log(`Web server is listening on port ${process.env.PORT || port}`);
-------------------------------------------------------------
This line of code is used to log a message to the console indicating that the web server is up and running and listening on a specific port. The message includes the port number that the server is listening on, which is determined by checking if there is an environment variable called PORT (process.env.PORT) set. If there is, it uses that value; otherwise, it falls back to the default port number defined in the variable port (which is 3000 in this case). This is useful for debugging and confirming that your server has started successfully and is ready to handle requests.
The console this will be logged to is the terminal or command prompt where you ran the node server.js command to start your server. You should see this message in that terminal, confirming that your server is listening on the specified port. 
The dev tools console in your web browser will not show this message, as it is only logged to the terminal where the server is running.
*/

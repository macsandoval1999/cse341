// 1. Imports
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');



// 2. Routes
routes.get('/', lesson1Controller.homeRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);



// 3. Export the Router
module.exports = routes;



/*
1. 
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1.js');
---------------------------------------------------

In a router file, we need to import the Express module and create a new router instance using express.Router(). A router is a mini Express application that can be used to define routes and middleware separately from the main application. This router object will be used to define our routes for the home page, but we can have multiple router files for different sections of our application (e.g., inventory, account) to keep our code organized.

We also import the lesson1Controller, which contains the functions that will handle the logic for our routes. By importing it, we can use those functions as route handlers in our router. This allows us to call the functions here only, so we can clearly see what happens when a request matches a specific route. The controller file will hold and define the functions.



2.
routes.get('/', lesson1Controller.homeRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);
---------------------------------------------------

This router object for the home page defines three routes:
    routes.get('/', lesson1Controller.homeRoute);
    This route listens for GET requests to the root path "/". When a request matches this path, it will call the homeRoute function from the lesson1Controller. The homeRoute function will handle the logic for this route and send an appropriate response back to the client.

    routes.get('/emily', lesson1Controller.emilyRoute);
    This route listens for GET requests to the path "/emily". When a request matches this path, it will call the emilyRoute function from the lesson1Controller. The emilyRoute function will handle the logic for this route and send an appropriate response back to the client.

    routes.get('/hannah', lesson1Controller.hannahRoute);
    Similarly, this route listens for GET requests to the path "/hannah". When a request matches this path, it will call the hannahRoute function from the lesson1Controller. The hannahRoute function will handle the logic for this route and send an appropriate response back to the client.



3.
module.exports = routes;
---------------------------------------------------

Finally, we export the router object so that it can be imported and used in our main server file (server.js). By exporting the router, we can keep our route definitions organized in separate files and easily manage them as our application grows. In server.js, we will import this router and use it to define the base path for these routes, allowing us to access them when we run our server.

Important thing to note:
We never actually jump into this file. We only import the router object in server.js and use it there. Instead, when we export the router object into server.js, we use that object to define the base path for these routes. So, we never directly call any functions in this file. We just set up the routes and export the router object for use in server.js.

Also, if a controller function has logic that redirects to another route, we would need to import the router in the controller file as well. However, in this specific code snippet, we are not directly using any functions from the router in our controller file, so we do not need to import it there. We just need to make sure that we have the correct imports in each file based on what functionality we are using. In this case, the router file imports the controller to use its functions as route handlers, and the server.js file imports the router to use it for defining routes.
*/
// 1. Controller Functions

const homeRoute = (req, res) => {
    res.send('Hello World!');
}
const emilyRoute = (req, res) => {
    res.send('Hello Emily!');
}
const hannahRoute = (req, res) => {
    res.send('Hello Hannah!');
}



// 2. Export
module.exports = {
    homeRoute,
    emilyRoute,
    hannahRoute
}



/*
1.
const homeRoute = (req, res) => {
    res.send('Hello World!');
}
const emilyRoute = (req, res) => {
    res.send('Hello Emily!');
}
const hannahRoute = (req, res) => {
    res.send('Hello Hannah!');
}
------------------------------------------------

This controller contains three functions: homeRoute, emilyRoute, and hannahRoute.

When an incoming req(request) matches the specified path defined in the router thats calling this controller, the code inside the function runs, and you use(res) to send the response back to the client.So, pass in req, if it matches the path, run code, return res. 
res has a method called send() that allows you to send a response back to the client.In this case, we are sending the string "Hello World!" as the response.So, when you visit http://localhost:3000/ in your web browser, you should see "Hello World!" displayed on the page. In real world applications, you would typically send more complex responses, such as HTML pages, JSON data, or files, but this is a simple example to demonstrate how routing works in Express.

Again, req is the incoming request, the specified path is defined in the router file (routes/index.js), and res is the response that we send back to the client. Each function in this controller corresponds to a specific route defined in the router, and when a request matches that route, the appropriate function will be called to handle the request and send a response back to the client.

In the router file you will see something like this:
routes.get('/', lesson1Controller.homeRoute);
This means if the incoming req matchers the path '/', then the homeRoute function from the lesson1Controller will be called to handle that request. 



2.
module.exports = {
    homeRoute,
    emilyRoute,
    hannahRoute
}
------------------------------------------------    

Finally, we export an object that contains the three functions defined in this controller. This allows us to import these functions in our router file (routes/index.js) and use them as route handlers for the corresponding routes. By exporting them as an object, we can easily access each function by its name when we import the controller in the router file. For example, in the router file, we can do something like this:
const lesson1Controller = require('../controllers/lesson1.js');
Then we can use lesson1Controller.homeRoute, lesson1Controller.emilyRoute, and lesson1Controller.hannahRoute to set up our routes in the router file. This keeps our code organized and allows us to separate the logic for handling requests into a separate controller file.
*/
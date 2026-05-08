const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const port = 3000;

app.listen(process.env.PORT || port);

console.log(`Web server is listening on port http://localhost:${process.env.PORT || port}`);


/*
1.
const express = require('express') 

require() is a built-in function in Node.js that allows you to import modules from your node_modules directory or from your own files. Remember how we used it to import files and packages in WDD340?



2.
const app = express();

After importing the Express module, we can create an instance of it by calling the express() function. This instance is an object that has methods for defining routes and handling requests. Literally, express already comes with built-in tools to handle HTTP requests and responses, so we can use it to create a web server without needing to write a lot of code from scratch. Again, remember WDD340.



3. 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

When an incoming req(request) matches the specified path "/", the code inside the function runs, and you use (res) to send the response back to the client. So, pass in req, if it matches the path, run code, return res. 
res has a method called send() that allows you to send a response back to the client. In this case, we are sending the string "Hello World!" as the response. So, when you visit http://localhost:3000/ in your web browser, you should see "Hello World!" displayed on the page.



4. 
const port = 3000;
app.listen(process.env.PORT || port);

First we define a constant variable called port and assign it the value of 3000. This is the port number that our web server will listen on for incoming requests.
Then we call the listen() method on our Express app instance, passing in the port number. This tells our web server to start listening for incoming requests on that port. In other words, when you run this code, your web server will be up and running and ready to handle requests on port 3000. You can access it by going to http://localhost:3000/ in your web browser.



6.
console.log(`Web server is listening on port ${process.env.PORT || port}`);

This line of code is used to log a message to the console indicating that the web server is up and running and listening on a specific port. The message includes the port number that the server is listening on, which is determined by checking if there is an environment variable called PORT (process.env.PORT) set. If there is, it uses that value; otherwise, it falls back to the default port number defined in the variable port (which is 3000 in this case). This is useful for debugging and confirming that your server has started successfully and is ready to handle requests.
The console this will be logged to is the terminal or command prompt where you ran the node server.js command to start your server. You should see this message in that terminal, confirming that your server is listening on the specified port. 
The dev tools console in your web browser will not show this message, as it is only logged to the terminal where the server is running.
*/

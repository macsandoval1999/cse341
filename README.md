# cse341
Repository for CSE341



# 1. Starting the Project with Node
You want to start by checking if you have node and npm. If your versions are good, create a package.json file with the last command.

node --version 
checks node version currently installed

npm --version
checks npm version currently installed

npm init --y
The command npm init --y automatically creates a default package.json file in your project directory. The --y flag (or --yes) answers "yes" to all prompts, so npm uses default values for all fields (like name, version, entry point, etc.) without asking you any questions. This is useful for quickly setting up a Node.js project.

After you run the code above, create a server.js file.

# 2. Setting up the package.json file
Once the file is created with the previous command, we should tweak it a bit.

"scripts"
The scripts section is a place where you can make your own commands. Remember "npm run dev" from a previous class? That was a custom script we added to launch our local developer server to work on our projects.
    -   Add a new script to launch our main file like before called "start" that runs the main file in our project called "server.js"
            "start": "node server.js"
    -   The name of the file you run on your "start" "script" should match the "main" file name as well.



# 3. Install the express framework
npm install _______ --save
This command allows us to install a package. The --save adds the package into the dependencies section in your package.json file. This means the package will be listed as required for your project, so others can install all needed packages with npm install.______
    - npm install express --save
        This installs express and adds it to your project.

node_modules & package-lock.json
    node_modules
    You will notice a new folder is added to your project after installing a package. The node_modules folder stores all the packages (dependencies) that your Node.js project needs. When you run npm install, npm downloads and saves the required libraries into node_modules so your project can use them. This folder can get very large and should not be committed to version control. node_modules should not get pushed into version control. node_modules is huge, and we dont ever want it to be pushed up to version control. We must create a .gitignore file and add node_modules into it.

    package-lock.json
    This file is also automatically created when installing your first package. The package-lock.json file records the exact versions of every package (and their dependencies) installed in your project. This ensures that anyone who installs your project gets the same dependency versions, making builds consistent and preventing unexpected bugs from version changes. It is automatically created and updated by npm. You should commit package-lock.json to version control. It helps ensure everyone working on the project installs the exact same dependency versions, making your project builds consistent and reliable.

.gitignore
A .gitignore file tells Git which files or folders to ignore and not track in version control. For example, you add node_modules to .gitignore so that the large dependency folder is not uploaded to your repository. This keeps your repo clean and avoids sharing unnecessary or sensitive files.
    - add node_modules into this file



# 5. Setting up the developer server
We want updates to our browser as we work on it. Currently, once you run start, we have to close the server and run start again to see changes. It is a pain to constantly have to run the start command over and over, so lets add more packages to fix this.
    npm install nodemon --save-dev
    We download the package the same way, except for one change. --save-dev adds it to the package.json just the same, except it saves packages in a different section called "devDependencies" which is strictly for local test servers. You use --save-dev to add packages that you only want in your local test server. 
    Here we install nodemon, which allows changes to be seen upon refresh. This is still a pain in the butt because you want to see the changes live as you go without the constant back and forth.
    This package restarts the server automatically after each change in the files. Thats why refreshing the page shows the update, because you essentially sent another GET request that pulls the updated browser from the server.

    npm install browser-sync --save-dev
    The browser-sync package is a development tool that provides live-reloading and synchronization across multiple browsers and devices. When you make changes to your files (HTML, CSS, JS), browser-sync automatically refreshes all connected browsers, ensuring you see updates instantly. It also synchronizes interactions like clicks, scrolls, and form inputs, making it useful for responsive and cross-device testing. 
    This only works if the file it is watching has a body element as that's how it was created. So, while nodemon watches the for server changes, browser-sync watches for html or css changes.
    This package refreshes the browser for you as specified files change but only works if you have a body element.

    npm install concurrently --save-dev
    The concurrently package is a Node.js utility that allows you to run multiple commands or scripts at the same time in a single terminal window. It is commonly used in development to start several processes (like a server, a frontend build tool, and a watcher) simultaneously, making it easier to manage multi-process workflows.
    This package allows you to use multiple devDependencie packages, like nodemon and browser-sync at the same time.

Dependencies (like express) are imported in your code (e.g., server.js) because your app needs them to run.
DevDependencies (like nodemon, browser-sync, concurrently) are not imported in your code. Instead, you set them up as scripts in your package.json (under the "scripts" section) to use their features during development.
So, you don’t import devDependencies in your code, but you do need to configure your package.json scripts to use them. Simply installing them does not make your project use them automatically.

In your package.json "scripts" section, you will need to write them in so you can ultimately creat a dev command that can use both at the same time:
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js",
        "dev:server": "nodemon server.js",
        "dev:browser": "browser-sync start --proxy localhost:3000 --files server.js --reload-delay 500 --reload-debounce 1000 --port 3001",
        "dev": "concurrently \"npm:dev:server\" \"npm:dev:browser\""
    },
  
    "test": "echo \"Error: no test specified\" && exit 1",
    This script means:
        - When you run npm test, it will print Error: no test specified to the terminal.
        - The && exit 1 part makes the command exit with a status code of 1, which signals an error.
    This is a placeholder script automatically added by npm when you create a new project. It reminds you that you haven’t set up any tests yet. You can replace it with a real test command when you add tests to your project.

    "start": "node server.js" 
    This sript means:
        - When you run npm start, it will execute node server.js in your terminal.
        - This starts your Node.js application by running the server.js file, which is typically your main server entry point.
    This is the standard way to launch your app using npm.

    "dev:server": "nodemon server.js" 
    This scripts means:
        - When you run npm run dev:server, it will start your server using nodemon.
        - nodemon watches for changes in your files and automatically restarts server.js when you save changes.
    This is useful for development, so you don’t have to manually restart your server each time you update your code.

    "dev:browser": "browser-sync start --proxy localhost:3000 --files server.js --reload-delay 500 --reload-debounce 1000 --port 3001" 
    This script means:
        - When you run npm run dev:browser, it starts browser-sync, which proxies your app running on localhost:3000.
        - It watches server.js for changes and reloads the browser after a short delay (500ms) and debounce (1000ms) to avoid too many reloads.
        - The browser-sync UI will be available on port 3001.
    This helps you see changes in your browser instantly during development, especially for HTML/CSS changes.

    "dev": "concurrently \"npm:dev:server\" \"npm:dev:browser\""
    The line "dev": "concurrently "npm:dev:server" "npm:dev:browser"" in your package.json scripts means:
        - When you run npm run dev, it uses the concurrently package to run both npm:dev:server (nodemon server.js) and npm:dev:browser (browser-sync) at the same time.
        - This allows your server to auto-restart on changes and your browser to auto-reload, streamlining your development workflow.



# 4. Server.js
Look at the file for notes.
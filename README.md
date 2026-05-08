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



# 4. Server.js
Look at the file for notes



# 5. Setting up the developer server
We want updates to our browser as we work on it. Currently, once you run start, we have to close the server and run start again to see changes. It is a pain to constantly have to run the start command over and over, so lets add more packages to fix this.
    npm install nodemon --save-dev
    We download the package the same way, except for one change. --save-dev adds it to the package.json just the same, except it saves packages in a different section called "devDependencies" which is strictly for local test servers. You use --save-dev to add packages that you only want in your local test server. 
    Here we install nodemon, which allows changes to be seen upon refresh. This is still a pain in the butt because you want to see the changes live as you go without the constant back and forth.
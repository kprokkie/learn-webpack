# learn-webpack

// Installing Webpack

> npm init //in root directory
Now NPM init, is a utility that's gonna step you through all of the process of setting up a node project. So it's going to create a package json file and that package json file will have documentation about your project and how you expect it to work, what its name is, and the like.

> npm install webpack --save-dev
Now what save dev is going to do is it's going to install webpack into your dev dependencies. So anything we need for our development environment is going to appear there.
So dev dependencies are everything we need in development, things like testing frameworks and transpiling frameworks like webpack, dependencies are everything we need for the browser.

> npm install jquery --save
This is going to save this to our regular dependencies. So our regular dependencies are going to have their own space here, our own node.
So things like jquery, things like react, things that your users will actually need.

// Running Webpack Build
First of all, you'll notice that in your root folder, you don't have a node -modules folder already. This is because having a node-modules folder in each application folder starts to make folder enormous. We do have a packaged JSON file in each Start folder though,
> npm install
so you can always run npm install, which will install of the dependencies.
It will install all of our dependencies. At this point, that's just jQuery and Webpack.


<script type="text/javascript" src="./bundle.js"></script> // html file

The script tag is not going to link to main.js. It's actually going to link to the bundle.js. That's where all of our Webpack code has been bundled. Now we'll add a source for that, so "./bundle.js."

> webpack main.js ./bundle.js // webpack <entry-point> <location-point>

the simplest way to run Webpack is to type "Webpack." We want to then define an entry point, so that main.js file is our entry point.

That's the code we want to transform, and then we want to provide the location for where we want to bundle this, so "./bundle.js."

the issue when webpack isn't installed globally
'webpack' is not recognized as an internal or external command,
operable program or batch file.

If you have run this, and you didn't see a successful outcome like this, you may see an error that says, "Webpack not found." This is no problem.

There's a really nice work around for this. Instead of running the Webpack command, we're going to run Webpack from our Node Modules folder.

resolve #1
If we investigate this Node Modules folder a little bit, we can look inside of our Bin folder, and then we see Webpack is one of the commands.

If you do see that error saying that Webpack is not found
> ./node_modules/.bin/webpack <and then you can run the rest>
> ./node_modules/.bin/webpack main.js ./bundle.js

resolve #2
> npm install -g webpack // to resolve the issue

// Webpack Configuration

how to set up a webpack configuration file so that this can automate the process of running web pack

webpack.config.js and a webpack config file always has this name

module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    }
};

> webpack // this will read config from webpack.config.js

Often times when we're working on JavaScript projects, though, we don't wanna have all of our JavaScript files here at the route of our folder. It can be a little bit more organized perhaps to set up a source folder and a build folder.































# learn-webpack

<h3>Installing Webpack</h3>
`> npm init` in root directory
Now NPM init, is a utility that's gonna step you through all of the process of setting up a node project. 
So it's going to create a package json file and that package json file will have documentation about your project and how you expect it to work, what its name is, and the like.

`> npm install webpack --save-dev`
Now what save dev is going to do is it's going to install webpack into your dev dependencies. 
So anything we need for our development environment is going to appear there.
So dev dependencies are everything we need in development, things like testing frameworks and transpiling frameworks like webpack, dependencies are everything we need for the browser.

`> npm install jquery --save`
This is going to save this to our regular dependencies. So our regular dependencies are going to have their own space here, our own node.
So things like jquery, things like react, things that your users will actually need.

<h3>Running Webpack Build</h3>
First of all, you'll notice that in your root folder, you don't have a node -modules folder already. This is because having a node-modules folder in each application folder starts to make folder enormous. We do have a packaged JSON file in each Start folder though

`> npm install`
So you can always run npm install, which will install of the dependencies.
It will install all of our dependencies. At this point, that's just jQuery and Webpack.

`<script type="text/javascript" src="./bundle.js"></script>` in html file
The script tag is not going to link to main.js. It's actually going to link to the bundle.js. That's where all of our Webpack code has been bundled. Now we'll add a source for that, so "./bundle.js."

`> webpack main.js ./bundle.js`  webpack [entry-point] [location-point]
The simplest way to run Webpack is to type "Webpack." We want to then define an entry point, so that main.js file is our entry point.
That's the code we want to transform, and then we want to provide the location for where we want to bundle this, so **./bundle.js**

The issue when webpack isn't installed globally
`'webpack' is not recognized as an internal or external command, operable program or batch file.`

If you have run this, and you didn't see a successful outcome like this, you may see an error that says, "Webpack not found." This is no problem.
There's a really nice work around for this. Instead of running the webpack command, we're going to run Webpack from our node-modules folder.

**resolve #1**
If we investigate this Node Modules folder a little bit, we can look inside of our Bin folder, and then we see Webpack is one of the commands.
If you do see that error saying that Webpack is not found
`> ./node_modules/.bin/webpack main.js ./bundle.js`

**resolve #2**
Install the webpack globally
`> npm install -g webpack `

<h3>Webpack Configuration</h3>
How to set up a webpack configuration file so that this can automate the process of running web pack

**webpack.config.js** and a webpack config file always has this name

`module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    }
};`

After configure the webpack config file, only run webpack command, this will read config from webpack.config.js
`> webpack` 

Often times when we're working on JavaScript projects, though, we don't wanna have all of our JavaScript files here at the route of our folder. 
It can be a little bit more organized perhaps to set up a source folder and a build folder.

`module.exports = {
    entry: './src/main.js',
    output: {
        path: 'build',
        filename: 'bundle.js'
    }
};`

So here we will run webpack and now we notice that, not only has it looked in our source folder for that main file but we also have a build folder with a bundle JS in it. 
Something to also note at this point is you want to make sure to change the path in your index.html file, so you want to make sure to link to that bundle file appropriately. 

Now, every time I type webpack and run webpack, it's going to require me to run it again if I make any changes.

We can also run webpack sending it the w flag. 
`> webpack -w`
This is just a watch flag that's going to watch to see if any changes have occurred in the main JS file and if they have it's going to rebuild the files and it's going to run that right away. 
So when I send it with this w flag we notice that the process is still running.

So this is pretty cool that we can do this. 
We've sent it a w flag and each and every time something changes it's going to rebundle those assets.

<h3>Webpack Loaders</h3>

Webpack Loaders help us load and preform transformations on files. 
They can help with the loading of files and images and webpack Loaders are commonly used when working with different dialects of JavaScript. 
`e.g:` many react applications use JSX, or JavaScript as XML to create user interface components. 
JSX doesn't run natively in the browser. It must first be transpiled into plain JavaScript in order for it to run. 
You also might be using ES6 or ECMAScript 6, the latest version of the JavaScript spec.

Not all browsers support all ES6 features, so like JSX, ES is often transpiled into plain JavaScript first. 
The tool most commonly used for transformation of JSX and ES6 into ES5 JavaScript is **Babel**. 
When we use the babel-loader in webpack projects we tell webpack to use Babel to preform these transformation on certain types of files. 
JSX and ES6 go in, get transpiled, and plain JavaScript comes out.

To setup the babel-loader
`> npm install babel-loader babel-core --save-dev`
So babel-loader is the loader, and babel-core is the actual babel package that handles our transformations.

Now we need to make some adjustments to the webpack.config file. 
The first of these is to add a new key called module. 
Module is an object that is going to take in, as another key loaders, loaders is an array and it's an array of objects that describe all of the different loaders that we want to use.

`module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }
    ]
}`

We run webpack, we're going to notice that webpack runs but the tricky thing here is that not too much has happened.

We need to take another step with setting up our babel-loader so that these ES6 transformations will occur.

Now in **Babel 6** all of these transpiling features are opt-in, so if I want to transpile anything, I need to specify what I want to transpile, using presets.

Specifying these in my project begins with **webpack.config** file. So here, we're going to add one more line and this is going to be called query.
Query is going to be set equal to an object and this will have a key of presets and will send in ES2015 and react. 
`query: {
    presets: ['es2015','react']
}`

I also need to go ahead and create this **.babelrc** file. 
`{
 	'presets': [
 		'es2015','react'
 	]
 }`
So the Babel RC file is just an object that has presets defined for ES2015 and react. 
The final step that I need to take here is I need to install these packages.

`> npm install babel-preset-es2015 babel-preset-react --save-dev`
So once these are installed my project is ready to go and I'm going to be able to make any transformations to ES2015 or react.






























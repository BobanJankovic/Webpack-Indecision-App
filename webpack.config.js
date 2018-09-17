//this object is going to define all our configuration details for our webpack build
//this is node thing and is another way to expose this object to another file
//webpack is going to grab a file , is going to run it, and it is going to do with that file what 
//ever we put in object
//entry-tell webpack where to start for us it is going to be our app.js in our source(src) folder
//path is going to be absolute path we need to define that path and its obvious that is going to be different for everyone, 
//and it depends of ours local machine and our project
//da vidimo nasu apsolutnu putanju koristimo global varijablu __dirname, i u terminalu kucamo ,
//node webpack.config.js
//console.log(__dirname);

//minimum webpack setup
const path = require('path');
//pokazuje mi apsolutnu putanju do publika gde ce se nalaziti bundle.js
//console.log(path.join(__dirname,"public"));
module.exports = {
  entry: "./src/index.js",
  output: {
   path: path.join(__dirname,"public"),
   filename:"bundle.js"   
  },
  module: {
      rules: [{
      loader:'babel-loader',
      test:/\.js$/,
      exclude: /node_modules/
  }]
  },
  devtool:'cheap-module-eval-source-map',
  
  
};
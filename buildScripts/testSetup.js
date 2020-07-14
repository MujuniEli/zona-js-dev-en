//This file isn't transpilled, so should use commonJs and ES5

//Reister babel to transpile before our tests run
    require('babel-register')();

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {}; 

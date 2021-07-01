'use strict';

const fractal = require('./fractal-init');
const builder = fractal.web.builder();

module.exports = (gulp, plugins) => {
    return () => { 
        builder.build().then(function(){
            console.log(`Fractal static HTML build complete!`);
        });
    };
};
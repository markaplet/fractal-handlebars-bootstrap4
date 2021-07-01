'use strict';

const fractal = require('./fractal-init');
const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

module.exports = (gulp, plugins) => {
    
    return () => {
        const server = fractal.web.server({
            sync: true // Use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
        });
        
        server.on('error', err => logger.error(err.message));
        return server.start().then(() => {
            logger.success(`Fractal server is now running at ${server.url}`);
        });
    }
};
'use strict';

const path = require('path');
const fs = require('fs');
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// Find all page partials
const pagePartialsPath = path.join(__dirname, '../src/pages/_partials/');

function getPagePartials(pagePartialsPath) {
    const partials = {};

    if (fs.existsSync(pagePartialsPath)) {
        const partialMatch = new RegExp(`\.hbs$`);

        fs.readdirSync(pagePartialsPath).forEach(function(partialName) {
            if (partialName.match(partialMatch)) {
                partials[path.basename(partialName, '.hbs')] = fs.readFileSync(`${pagePartialsPath}${partialName}`, 'utf8')
            }
        });
    }

    return partials;
}

const pagePartials = getPagePartials(pagePartialsPath);

// Add helpers and partials
const hbs = require('@frctl/handlebars')({
    helpers: {},
    partials: pagePartials
});

fractal.components.engine(hbs); /* set as the default template engine for components */
fractal.docs.engine(hbs);

const basePath = path.normalize(path.join(__dirname, '..'));
fractal.web.set('static.path', basePath + '/public');

// Create a cutomized theme for the Fractal UI
const myCustomisedTheme = mandelbrot({
    skin: 'blue', // Other options: 'aqua' | 'black' | 'blue' | 'default' | 'fuchsia' | 'green' | 'grey' | 'lime' | 'maroon' | 'navy' | 'olive' | 'orange' | 'purple' | 'red' | 'teal' | 'white' | 'yellow'
    panels: ['html', 'view', 'context', 'notes'], // Choose which panels to display and how they're organized. Possible options: 'html' | 'view' | 'context' | 'resources' | 'info' | 'notes'
    nav: ['docs', 'components'], // show docs above components in the sidebar
    styles: [
        // 'default', // Adds the default Mandelbrot stylesheet
        `/assets/css/mandelbrot-blue-custom.css`, // Add URL for additional styles to apply after the default
        `/assets/css/docs.css`, // Add URL for additional styles to apply after the default
        `/assets/css/design-tokens.css`,
    ],
    scripts: [
        'default',
        '/assets/js/main.js', // Includes jQuery, which can then be used for docs.js
        '/assets/js/docs.js', // Add URL for additional scripts to apply after the default
    ],
});

// Add or overwrite Fractal pages (ex: panels) by adding files to the following folder:
myCustomisedTheme.addLoadPath(path.join(__dirname, '../src/docs/theme-overrides/views/'));

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

// Global project configuration
fractal.set('project.title', '[PROJECT] Web Style Guide'); // title for the project
fractal.web.set('builder.dest', 'build'); // destination for the static export
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
});

// Docs configuration
fractal.docs.set('path', 'src/docs'); // location of the documentation directory.

// Component configuration
// fractal.components.set('title', 'Components');
fractal.components.set('default.status', 'prototype');
fractal.components.set('path', `src/`); // location of the component directory.
fractal.components.set('default.preview', 'src/docs/preview-template.hbs'); // the container to render the component preview in.
fractal.components.set('default.collated', false); // variants should be collated in rendered previews.
fractal.components.set('label', 'Components & Pages');
fractal.components.set('yield', 'body');
fractal.components.set('default.collator', function(markup, item) {
    return `<h4>${item.name}:</h4>\n${markup}\n<hr>\n`
});

module.exports = fractal;

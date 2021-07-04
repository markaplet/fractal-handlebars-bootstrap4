# Frontend Project Guide
_This project uses [Fractal](http://www.fractal.build) to create a library of all frontend components and test pages. It is useful for previewing components as they're being developed, styled and tested, and as a reference for the integration of those components by the backend developers._

## Initial Project Setup
NOTE: This project may not work with node versions higher than `8.17.0` without some work to update packages.

1. Set the 'name' of the project in the /package.json file (default: 'PROJECT_NAME').
2. Run `npm install` on the command line in the root project directory.
3. Set the title of the Fractal component library in /gulp/fractal-init.js (default: 'PROJECT NAME Component Library').
4. Run `npm start` on the command line in the root project directory, to be sure Fractal successfully loads. If the command line shows an error, then see the *Troubleshooting* section below.
5. Commit the project to version control, and be sure not to include the /node_modules or /public folders. Anyone else who installs the project from the repository at this point will only need to run `npm install`. The rest of the setup is complete.

## Adding Components
1. To add a component that already exists in /src/components/, follow these steps:
    * In the component folder, find the *.config.json file (ex: /src/components/foundation/COMPONENT_NAME/COMPONENT_NAME.config.json), and change "hidden" to false.
    * In /config/assets/default.js add (or uncomment if it's already in the list) a reference to the component's css. See the other components already listed for an example of the syntax. Then add a reference to the component's js, only if it has one or more JavaScript files in its js folder.
    * If a component uses Bootstrap CSS or JavaScript, which is not already being used in the project, you can uncomment the relevant CSS or JS in the /config/assets/bootstrap/bootstrap-less.js and /config/assets/bootstrap/bootstrap-js.js files, respectively.
2. There are two methods of creating a new component:
   1. Copy an existing component, and change the name of the folder, files, and references within the files to match the name of the new component.
   2. Create a component from scratch by creating the folders and files manually. (or with a script). You can follow the [From Scratch](https://fractal.build/guide/getting-started.html#the-from-scratch-method) posted on the fractal guide, or just look at an existing component file structure it's fairly easy to follow. 
3. Restart Fractal by running `npm start`. (Not needed if compiling all component css and js automatically.)
4. You should now see the component you added in the left sidebar. You can now edit the component's SCSS, JS, *.config.json, readme, and *.hbs files. 

## Project Commands
* `npm start` or `npm run dev`: Starts an instance of Fractal, which will watch for any changes and update when necessary. This creates a /public folder with the non-minified assets used to run Fractal. NOTE: be sure not to include this folder in your version control.
* `npm run build`: Creates a /public folder containing all of the assets needed for the final project, including the icon fonts, minified CSS and JS, and compressed images. NOTE: be sure not to include this folder in your version control.
* `npm run build:fractal`: Creates a /build folder containing the static fractal site. This is usually only used for deployment of Fractal. NOTE: be sure not to include this folder in your version control.

## Troubleshooting
* This project may not work with node versions higher than `8.17.0` without some work to update packages.
* If this solution is missing the package-lock.json file, then some npm packages may use a higher version than expected and will not run.
* `The LESS/SCSS compiler throws an error staying that a varaible is undefined:` May be because a LESS/SCSS file is referencing an icon variable name that isn't in the project. The icons in the project can be viewed in the following folder: /src/assets/font/iconfont. You can either generate a new iconfont that includes the missing icon by using [IcoMoon](https://icomoon.io), or remove the reference to the icon font variable in the LESS/SCSS file. When replacing the iconfont, be sure to comment out `@icomoon-font-path: "fonts";` in the /src/assets/font/iconfont/variables.less file, and `@import "variables";` in the /src/assets/font/iconfont/style.scss file. Those lines come standard with [IcoMoon](https://icomoon.io) generated fonts, but they do not work with this project.
* `Changes to the content in *.config.json are not showing up in Fractal:` Sometimes Fractal has an issue refreshing the content when it's been changed. The solution is to restart Fractal using `npm start`.

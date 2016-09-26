# Using Gulp to Compress and Compile CSS From a Target Sass File

This is an automation template for compiling Sass and compressing its CSS output. It contains a reset CSS document as a Sass component in the folder `sass`, along with a file called `main.scss` in the same folder. Running this task creates `main.css` in the folder `css.` See `gulpfile.js` for more.

## Downloading

To test this locally, you’ll need to clone this entire repository and look in the `gulp/templates/gulp-compress-sass-and-compile-css` folder:

      git clone git@github.com:code-warrior/code-warrior.github.io.git

## Usage

1. From the root directory, install the required Node modules. (You may need to invoke the `sudo` user.)

        npm install

2. Run Gulp, which calls the default task to compile the CSS.

        gulp

3. Open `index.html` in order to verify that the CSS was compiled.

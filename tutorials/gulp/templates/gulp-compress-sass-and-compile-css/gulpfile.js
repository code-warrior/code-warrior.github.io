/*jslint node: true */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

/**
 * DEFAULT
 *
 * 1. Use `main.scss` as the source for all the following tasks.
 * 2. Toss errors to the command line, highlighting the word “Error” in red.
 * 3. Compress the output that Sass generates from the file `main.scss`.
 * 4. Carry out to ten places the mathematical precision of all floating-point
 *    mathematical calculations carried out in `main.scss`.
 * 5. Using data from the web site caniuse.com, prefix any CSS3 properties that
 *    require a browser-specific prefix for as far back as two versions of browsers.
 * 6. Lastly, write all the output to the implied file `main.css` in the directory
 *    `css`.
 */
gulp.task('sass', function () {
    gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'compressed',
            precision: 10
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('css'));
});

/**
 * DEFAULT
 *
 * Invoke the default task by simply running “gulp” at the command line.
 */
gulp.task('default', ['sass']);

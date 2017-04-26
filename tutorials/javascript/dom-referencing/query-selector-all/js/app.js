/*jslint browser, es6, single, for, devel, this */
/*global window */

var p = document.querySelectorAll('body > p');

p[0].innerHTML = 'The <code>querySelectorAll</code> method allows you to retrieve a reference to every instance of the CSS chain targeted in the parameter list, placing each reference in an array.';
p[1].innerHTML = 'For example, this page has three <code>p</code>s, so <code>querySelectorAll</code> is an array to all three.';
p[2].innerHTML = 'See <a href="js/app.js">the JS</a> bound to this file.';

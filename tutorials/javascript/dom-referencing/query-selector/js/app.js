/*jslint browser, es6, single, for, devel, this */
/*global window */

var p = document.querySelector('h1 + p');

p.innerHTML = 'The method <code>querySelector</code> allows you to retrieve a reference to a DOM element using CSS selector chains. The reference is made to the first occurrence. For example, this page has two paragraphs, but the call to <code>querySelector</code> only established a reference to the first paragraph.';

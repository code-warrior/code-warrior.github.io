/*jslint browser, es6, single, devel, multivar */
/*global window */

window.onload = function () {
    'use strict';

    let body = document.body,
        div = document.querySelector('div'),
        p = document.querySelector('p'),
        strong = document.querySelector('strong'),
        output = '';

    output += '<p><code>body.compareDocumentPosition(p)</code> returns ' + body.compareDocumentPosition(p) + '</p>';
    output += '<p><code>p.compareDocumentPosition(body)</code> returns ' + p.compareDocumentPosition(body) + '</p>';
    output += '<p><code>div.compareDocumentPosition(p)</code> returns ' + div.compareDocumentPosition(p) + '</p>';
    output += '<p><code>p.compareDocumentPosition(div)</code> returns ' + p.compareDocumentPosition(div) + '</p>';
    output += '<p><code>strong.compareDocumentPosition(strong)</code> returns ' + strong.compareDocumentPosition(strong) + '</p>';

    div.innerHTML = output;
};

/*jslint browser: true, es6 */
/*global window, document */

window.onload = function () {
    'use strict';

    var output = ``;
    var name = `Ed`;

    output += `<p><code>name</code>’s value on line 10 is ` +
    ` <strong>${name}</strong>.</p>`;

    if (name) {
        output += `<p><code>name</code>’s value on line 13 is ` +
        ` <strong>${name}</strong>.</p>`;

        var name = `Bob`;

        output += `<p><code>name</code>’s value on line 17 is ` +
        ` <strong>${name}</strong>.</p>`;
    }

    output += `<p><code>name</code>’s value on line 20 is ` +
    `<strong>${name}</strong>. The initialization of the <code>name</code> ` +
    `variable on line 15 overrides the <code>name</code> initialization on line 8` +
    `permanentely in the global scope.</p>`;

    var message = document.getElementById(`msg`);

    message.innerHTML = output;
};

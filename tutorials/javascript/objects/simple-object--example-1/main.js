/*jslint browser: true */
/*global window */

window.onload = function () {
    'use strict';

    let msg = document.getElementsByTagName('body')[0],
        output = '',
        food = {
            fruit: 'apple',
            vegetable: 'broccoli'
        };

    output += 'I’d like to eat one ' + food.fruit + ' and some ' + food.vegetable + '. ';

    output += 'Actually, I’d like to eat two ' + food['fruit'] + 's and many ' + food['vegetable'] + 's!';

    msg.textContent = output;
};

/*jslint browser: true, for */
/*global window */

window.onload = function () {
    'use strict';

    let msg = document.getElementsByTagName('body')[0],
        output = '',
        food = {
            fruit: [
                'apple',
                'pear',
                'banana'
            ],
            vegetable: [
                'broccoli',
                'kale',
                'spinach',
                'cauliflower'
            ]
        };

    output += 'I need to go buy ';

    for (let i = 0; i < food.fruit.length; i += 1) {
        if ((food.fruit.length - 1) !== i) {
            output += (food.fruit[i] + 's, ');
        } else {
            output += (' and ' + (food.fruit[i] + 's. '));
        }
    }

    output += ' I also need to buy ';

    for (let i = 0; i < food.vegetable.length; i += 1) {
        output += (food.vegetable.length - 1 !== i) ?
            (food.vegetable[i] + ', ') :
            (' and ' + food.vegetable[i] + '.');
    }

    msg.textContent = output;
};

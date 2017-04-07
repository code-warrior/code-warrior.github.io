/*jslint browser: true, es6, single, for, multivar */
/*global window */

window.onload = function () {
    'use strict';

    let msg = document.getElementById('msg'),
        output = '',
        beatles = {
            "members": [
                {
                    first_name: "John",
                    last_name: "Lennon",
                    alive: false,
                    instruments: [
                        "piano", "guitar", "voice"
                    ]
                },
                {
                    first_name: "Paul",
                    last_name: "McCartney",
                    alive: true,
                    instruments: [
                        "piano", "guitar", "voice", "bass"
                    ]
                },
                {
                    first_name: "George",
                    last_name: "Harrison",
                    alive: false,
                    instruments: [
                        "piano", "guitar"
                    ]
                },
                {
                    first_name: "Ringo",
                    last_name: "Starr",
                    alive: true,
                    instruments: [
                        "drums"
                    ]
                }
            ]
        };

    output += 'The Beatles were… <br>';

    for (let i = 0; i < beatles.members.length; i += 1) {
        output += ('— ' + beatles.members[i].first_name + ' ' + beatles.members[i].last_name + '<br>');
    }

    output += '<br>';

    for (let i = 0; i < beatles.members.length; i += 1) {
        output += (beatles.members[i].first_name + ' plays ');

        for (let j = 0; j < beatles.members[i].instruments.length; j += 1) {

            if ((beatles.members[i].instruments.length - 1) === j) {
                output += (beatles.members[i].instruments[j] + '.');
            } else {
                output += (beatles.members[i].instruments[j] + ', ');
            }
        }

        output += '<br>';
    }

    msg.innerHTML = output;
};

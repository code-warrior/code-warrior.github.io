let body = document.querySelector('body'),
    script = document.createElement('script'),
    _state = document.getElementById('state'),
    _city = document.getElementById('city'),
    _borough = document.getElementById('borough'),
    _colleges = document.getElementById('colleges');

function collegeData(data) {
    _state.innerHTML = '<b>State</b>: ' + data.state[0].name;
    _city.innerHTML = '<b>City</b>: ' + data.state[0].city[0].name;
    _borough.innerHTML = '<b>Borough</b>: ' + data.state[0].city[0].borough[0].name;
    _colleges.innerHTML = '<b>Colleges</b>: ';

    for (let i = 0; i < data.state[0].city[0].borough[0].colleges.length; i += 1) {
        _colleges.innerHTML += (data.state[0].city[0].borough[0].colleges[i] + ' ');
    }
}

script.setAttribute('src', 'data/data.json');

body.appendChild(script);

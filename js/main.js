const _0x51b58e = _0x1c5a;
(function(_0xa379c4, _0xdf2c3) {
    const _0xa9281e = _0x1c5a
      , _0x392eb9 = _0xa379c4();
    while (!![]) {
        try {
            const _0x36ee61 = parseInt(_0xa9281e(0x11f)) / 0x1 * (parseInt(_0xa9281e(0x12a)) / 0x2) + -parseInt(_0xa9281e(0x10c)) / 0x3 * (parseInt(_0xa9281e(0x102)) / 0x4) + -parseInt(_0xa9281e(0xe9)) / 0x5 + -parseInt(_0xa9281e(0xf1)) / 0x6 + -parseInt(_0xa9281e(0x119)) / 0x7 * (-parseInt(_0xa9281e(0x100)) / 0x8) + -parseInt(_0xa9281e(0x106)) / 0x9 * (parseInt(_0xa9281e(0xf4)) / 0xa) + parseInt(_0xa9281e(0x124)) / 0xb * (parseInt(_0xa9281e(0x11c)) / 0xc);
            if (_0x36ee61 === _0xdf2c3)
                break;
            else
                _0x392eb9['push'](_0x392eb9['shift']());
        } catch (_0x57a9ef) {
            _0x392eb9['push'](_0x392eb9['shift']());
        }
    }
}(_0x1c09, 0x5520a),
$(document)[_0x51b58e(0x104)](function() {
    const _0x168453 = _0x51b58e;
    $(_0x168453(0xed))[_0x168453(0x114)](function(_0x20c8fa) {
        submitRequest(_0x20c8fa);
    });
}),
$(_0x51b58e(0x128))[_0x51b58e(0x12f)](function() {
    const _0x2ec6f6 = _0x51b58e
      , _0x5352fc = $['parseJSON']($(_0x2ec6f6(0x128))[_0x2ec6f6(0x131)]())
      , _0x4350b7 = _0x5352fc[_0x2ec6f6(0xf9)]
      , _0x51216c = _0x5352fc[_0x2ec6f6(0x130)];
    if (_0x4350b7 > 0x5a || _0x4350b7 < -0x5a || _0x51216c > 0xb4 || _0x51216c < -0xb4) {
        setDataErrorMessages();
        return;
    }
    submitRequest(_0x4350b7, _0x51216c);
}));
var temperature_unit = 'c';
let weatherTypeTranslation = {
    'pcloudy': _0x51b58e(0x11a),
    'mcloudy': 'mostly\x20cloudy',
    'lightrain': _0x51b58e(0xe5),
    'oshower': _0x51b58e(0x117),
    'ishower': 'isolated\x20shower',
    'lightsnow': _0x51b58e(0x101),
    'rainsnow': _0x51b58e(0x11b),
    'tstorm': _0x51b58e(0x11d),
    'tsrain': 'thunderstorm'
}
  , weatherTypeEmojis = {
    'clear': '☀️',
    'pcloudy': _0x51b58e(0xe4),
    'cloudy': '⛅️',
    'mcloudy': '☁️',
    'foggy': _0x51b58e(0x10d),
    'humid': '💧',
    'lightrain': _0x51b58e(0xf3),
    'oshower': '🌧️',
    'ishower': _0x51b58e(0x129),
    'lightsnow': _0x51b58e(0xe7),
    'rain': _0x51b58e(0xf3),
    'snow': '❄️',
    'mixed': '🌧️\x20❄️',
    'rainsnow': _0x51b58e(0xe3),
    'tstorm': _0x51b58e(0x12e),
    'tsrain': '⛈️',
    'windy': '💨'
};
function formatDate(_0x4606a1) {
    const _0x113907 = _0x51b58e;
    let _0x493d3a = String(_0x4606a1)
      , _0x10427b = _0x493d3a[_0x113907(0x127)](0x0, 0x4)
      , _0x4cffb4 = _0x493d3a[_0x113907(0x127)](0x4, 0x6)
      , _0x390fe0 = _0x493d3a[_0x113907(0x127)](0x6, 0x8)
      , _0x2bad05 = new Date(_0x10427b,_0x4cffb4 - 0x1,_0x390fe0);
    return _0x2bad05[_0x113907(0x10e)]()['substring'](0x0, 0xa);
}
function formatResults(_0x5058d3) {
    const _0xbccb3d = _0x51b58e;
    var _0x4939a2 = JSON[_0xbccb3d(0xfb)](_0x5058d3)
      , _0x32f2fc = 0x0;
    console[_0xbccb3d(0xfe)](_0x5058d3);
    if (_0x4939a2['dataseries'][_0xbccb3d(0x121)] == 0x0)
        setNotFoundMessages();
    else {
        $('#get-results-heading')['text']('');
        var _0x535cb6 = '';
        _0x535cb6 += _0xbccb3d(0x109),
        _0x4939a2['dataseries'][_0xbccb3d(0x122)](function(_0xbd3d02, _0x329360) {
            const _0x1d5a09 = _0xbccb3d;
            _0x32f2fc++,
            _0x535cb6 += _0x1d5a09(0x10f),
            _0x535cb6 += _0x1d5a09(0x126) + formatDate(_0xbd3d02['date']) + _0x1d5a09(0x115);
            var _0x271a84 = weatherTypeEmojis[_0xbd3d02['weather']];
            _0x271a84 == undefined && (_0x271a84 = '');
            ;_0x535cb6 += _0x1d5a09(0xec) + _0x271a84 + _0x1d5a09(0x116);
            var _0x45100a = weatherTypeTranslation[_0xbd3d02[_0x1d5a09(0xf6)]];
            _0x45100a == undefined && (_0x45100a = _0xbd3d02[_0x1d5a09(0xf6)]);
            ;_0x535cb6 += '<p\x20class=\x27weather-description\x27>' + _0x45100a[_0x1d5a09(0xf2)](),
            _0x535cb6 += _0x1d5a09(0x105) + '<span\x20class=\x27celcius\x27>' + _0xbd3d02[_0x1d5a09(0xf8)]['max'] + '\x20ºC</span>' + '<span\x20class=\x27fahrenheit\x27>' + getFahrenheit(_0xbd3d02[_0x1d5a09(0xf8)]['max']) + _0x1d5a09(0x111),
            _0x535cb6 += _0x1d5a09(0x132) + '<span\x20class=\x27celcius\x27>' + _0xbd3d02[_0x1d5a09(0xf8)]['min'] + '\x20ºC</span>' + _0x1d5a09(0x112) + getFahrenheit(_0xbd3d02[_0x1d5a09(0xf8)]['min']) + _0x1d5a09(0x111),
            _0x535cb6 += _0x1d5a09(0xfa);
        }),
        _0x535cb6 += _0xbccb3d(0x116),
        _0x32f2fc > 0x0 ? ($(_0xbccb3d(0x110))[_0xbccb3d(0x123)](_0x535cb6),
        $(_0xbccb3d(0x10b))[_0xbccb3d(0x12c)]({
            'trigger': 'hover',
            'delay': {
                'show': 0x3e8,
                'hide': 0x0
            }
        })) : setNotFoundMessages();
    }
    filterTemperatureUnit();
}
function filterTemperatureUnit() {
    const _0x50630d = _0x51b58e;
    temperature_unit == 'c' ? ($('.celcius')[_0x50630d(0xf0)](),
    $('.fahrenheit')[_0x50630d(0xe8)]()) : ($(_0x50630d(0xe6))[_0x50630d(0xe8)](),
    $(_0x50630d(0x103))[_0x50630d(0xf0)]());
}
function _0x1c5a(_0x23fbad, _0x39b769) {
    const _0x1c0937 = _0x1c09();
    return _0x1c5a = function(_0x1c5a26, _0x49d997) {
        _0x1c5a26 = _0x1c5a26 - 0xe2;
        let _0x1c894f = _0x1c0937[_0x1c5a26];
        return _0x1c894f;
    }
    ,
    _0x1c5a(_0x23fbad, _0x39b769);
}
function getFahrenheit(_0x3fd294) {
    return Math['round'](_0x3fd294 * 1.8 + 0x20);
}
function _0x1c09() {
    const _0x499e84 = ['ready', '<p\x20class=\x27weather-temperatures\x27>High:\x20', '41643nqMTxJ', 'Switch\x20to\x20ºF', '#get-results-heading', '<div\x20class=\x27forecast-block\x20row\x20row-cols-sm-7\x20row-cols-md-7\x20row-cols-lg-7\x20g-4\x27>', '#temperature-unit', '[data-toggle=\x22tooltip\x22]', '18qxcKUU', '🌫️', 'toString', '<div\x20class=\x27col\x20bm-2\x27><div\x20class=\x27card\x20h-100\x27>', '#results', '\x20ºF</span></p>', '<span\x20class=\x27fahrenheit\x27>', 'civillight', 'submit', '</p>', '</div>', 'occasional\x20shower', 'Oops,\x20the\x20data\x20is\x20wrong\x20for\x20that\x20city.\x20Contact\x20the\x20webmaster.', '1041593wmAQOa', 'partly\x20cloudy', 'freezing\x20rain', '12HUQiqZ', 'thunderstorm\x20possible', 'https://www.7timer.info/bin/api.pl', '1VLRZRA', 'done', 'length', 'forEach', 'html', '14348917ZZrMJS', 'ajax', '<p\x20class=\x27weather-date\x27>', 'substring', '#citySelected', '🌦️', '779782ORoFSP', '<img\x20class=\x27small-animation\x27\x20src=\x27images/stopwatch.gif\x27\x20alt=\x27stopwatch\x27\x20/>', 'tooltip', 'always', '🌩️', 'change', 'lon', 'val', '<p\x20class=\x27weather-temperatures\x27>Low:\x20', 'GET', '🌧️\x20❄️', '🌤️', 'light\x20rain', '.celcius', '🌨️', 'hide', '2103510Wohxhv', '#search-results-heading', 'fail', '<div\x20class=\x27weather-icon-div\x27>', '#query-form', 'An\x20error\x20occurred.\x20Please\x20try\x20again.', 'Switch\x20to\x20ºC', 'show', '2884848VaouZo', 'toUpperCase', '🌧️', '790zQtzxU', 'Celcius', 'weather', '#temperature-toggle', 'temp2m', 'lat', '</div></div>', 'parse', 'text', 'json', 'log', 'Fahrenheit', '8XaTLIe', 'light\x20snow', '151608raRJoA', '.fahrenheit'];
    _0x1c09 = function() {
        return _0x499e84;
    }
    ;
    return _0x1c09();
}
function submitRequest(_0x51f730, _0x5c26a0) {
    const _0x202b40 = _0x51b58e;
    var _0x843ce6;
    _0x843ce6 && _0x843ce6['abort'](),
    $(_0x202b40(0x108))[_0x202b40(0x123)](_0x202b40(0x12b)),
    $(_0x202b40(0x110))[_0x202b40(0xfc)](''),
    _0x843ce6 = $[_0x202b40(0x125)]({
        'url': _0x202b40(0x11e),
        'type': _0x202b40(0xe2),
        'data': {
            'lon': _0x5c26a0,
            'lat': _0x51f730,
            'product': _0x202b40(0x113),
            'output': _0x202b40(0xfd)
        }
    }),
    _0x843ce6[_0x202b40(0x120)](function(_0x5941da, _0x208a72, _0x20266a) {
        formatResults(_0x5941da),
        toolTipReset();
    }),
    _0x843ce6[_0x202b40(0xeb)](function(_0x5b9011, _0x524d41, _0x44cea7) {
        const _0x2c6e1e = _0x202b40;
        $(_0x2c6e1e(0xea))[_0x2c6e1e(0xfc)](_0x2c6e1e(0xee)),
        $(_0x2c6e1e(0x110))[_0x2c6e1e(0xfc)]('');
    }),
    _0x843ce6[_0x202b40(0x12d)](function() {});
}
function setDataErrorMessages() {
    const _0x55cb26 = _0x51b58e;
    $(_0x55cb26(0x108))['text'](_0x55cb26(0x118)),
    $(_0x55cb26(0x110))['text']('');
}
function setNotFoundMessages() {
    const _0x4a488f = _0x51b58e;
    $(_0x4a488f(0x108))['text']('Oops,\x20no\x20forecast\x20found,\x20please\x20change\x20city.'),
    $('#results')[_0x4a488f(0xfc)]('');
}
function toggleTemperatureUnit() {
    const _0x50cf1d = _0x51b58e;
    temperature_unit == 'c' ? (temperature_unit = 'f',
    $(_0x50cf1d(0x10a))[_0x50cf1d(0xfc)](_0x50cf1d(0xff)),
    $(_0x50cf1d(0xf7))['text'](_0x50cf1d(0xef))) : (temperature_unit = 'c',
    $(_0x50cf1d(0x10a))[_0x50cf1d(0xfc)](_0x50cf1d(0xf5)),
    $(_0x50cf1d(0xf7))['text'](_0x50cf1d(0x107))),
    filterTemperatureUnit();
}
function toolTipReset() {
    const _0x2fa99f = _0x51b58e;
    $('.tooltip')[_0x2fa99f(0x12c)]('hide');
}

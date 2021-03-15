import m from 'mithril';

var Requests = function() {
    var characters = undefined;
    var inputValue = '';

    return {
        view: function() {
            return m('div',
                m('h2', 'Requests'),

                m('p',
                    'This example uses the built-in request utility, ', m('code', 'm.request'),
                    '. While IE11 does not support ES6+ Promises natively, Mithril comes with a minimal Promise polyfill!'
                ),

                m('label', 'search for star wars character:'),

                m('input', {
                    type: 'text',
                    oninput: function(ev) { inputValue = ev.target.value; }
                }),

                m('button', {
                    disabled: inputValue.trim() < 1,
                    onclick: function() {
                        submitSearch(inputValue).then(function(results) {
                            characters = results;
                        }).catch(function(emptyArr) {
                            characters = emptyArr;
                        });
                    }
                }, 'search!'),

                m('h3', 'results:'),
                characters
                    ? m('pre', JSON.stringify(characters, null, 2))
                    : m('em', 'No results.')
                ,
            )
        }
    };
};

function submitSearch(inputValue) {
    return m.request({
        method: 'GET',
        url: 'https://swapi.dev/api/people/',
        params: { search: inputValue }
    }).then(function(response) {
        return response.results;
    }).catch(function(error) {
        console.error(error);
        return [];
    });
}

export default Requests;
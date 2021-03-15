import m from 'mithril';

var Requests = function() {
    var loading = false;
    var characters = undefined;
    var inputValue = '';

    return {
        view: function() {
            return m('div',
                m('h2', 'Requests'),

                m('p',
                    'This example uses the built-in request utility, ', m('code', 'm.request'),
                    '. Mithril comes with a minimal Promise polyfill, so this works in IE11 out of the box.',
                    ' Data from: ',
                    m('a', { href: 'https://swapi.dev' }, 'swapi.dev')
                ),

                m('label', 'search for star wars character:'),

                m('input', {
                    type: 'text',
                    value: inputValue,
                    oninput: function(ev) { inputValue = ev.target.value; }
                }),

                m('button', {
                    disabled: inputValue.trim() < 1 || loading,
                    onclick: function() {
                        loading = true;
                        submitSearch(inputValue).then(function(results) {
                            characters = results;
                            loading = false;
                        }).catch(function(emptyArr) {
                            characters = emptyArr;
                            loading = false;
                        });
                    }
                }, loading ? 'loading...' : 'search'),

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
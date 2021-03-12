import m from 'mithril';

var DataBinding = function() {
    var inputValue = '';

    return {
        view: function() {
            return m('div',
                m('p',
                    'Databinding involves capturing event values and binding them to your application state.'
                ),

                m('label', 'enter username:'),
                m('input', {
                    type: 'text',
                    oninput: function(ev) { inputValue = ev.target.value; }
                }),

                m('h2', 'The current user is: ',
                    inputValue ? inputValue : m('em', '<empty string>')
                )
            )
        }
    };
};

export default DataBinding;
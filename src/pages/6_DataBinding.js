import m from 'mithril';

var DataBinding = function() {
    var inputValue = 'Default User';

    return {
        view: function() {
            return m('div',
                m('h2', 'Data-binding'),

                m('p', 'Databinding involves capturing event values and binding them to your application state.'),

                m('label', 'enter username:'),
                m('input', {
                    type: 'text',
                    value: inputValue,
                    oninput: function(ev) { inputValue = ev.target.value; }
                }),

                m('h3', 'The current user is: ',
                    inputValue ? inputValue : m('em', '<empty string>')
                )
            )
        }
    };
};

export default DataBinding;
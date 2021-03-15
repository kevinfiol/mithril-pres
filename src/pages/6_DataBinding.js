import m from 'mithril';

var DataBinding = function() {
    var inputValue = '';

    return {
        view: function() {
            return m('div',
                m('h2', 'Data-binding'),

                m('p',
                    'Databinding involves capturing event values and binding them to your application state.',
                    ' Unlike Angular, there is no two-way databinding (for better or for worse).',
                    ' But there is another option that I will soon get to!'
                ),

                m('label', 'enter username:'),
                m('input', {
                    type: 'text',
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
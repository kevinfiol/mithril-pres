import m from 'mithril';

var foo = 42;
var isOn = false;

var State = {
    view: function() {
        return m('div',
            m('h2', 'State'),

            'This state is in our lexical scope, and therefore, valid: ',
            m('h2', foo),

            m('p',
                'You can dynamically add/remove CSS classes as well. This example leverages a boolean value as state to add or remove a CSS class.'
            ),

            m('button', {
                className: isOn ? 'on' : '',
                onclick: function() { isOn = !isOn }
            }, isOn ? 'turn off' : 'turn on')
        )
    }
};

export default State;
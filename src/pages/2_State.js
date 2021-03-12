import m from 'mithril';

var foo = 42;

var State = {
    view: function() {
        return m('div',
            'This state is in our lexical scope, and therefore, valid: ',
            m('h2', foo)
        )
    }
};

export default State;
import m from 'mithril';

var counterNumber = 0;

var Counter = {
    view: function() {
        return m('div',
            m('h2', 'Counter'),

            m('p',
                'This is an obligatory counter example. This illustrates both state, and state alterations.'
            ),

            m('h2', counterNumber),

            m('button', {
                onclick: function() { counterNumber += 1; }
            }, 'increment'),

            m('button', {
                onclick: function() { counterNumber -= 1; }
            }, 'decrement')
        );
    }
};

export default Counter;
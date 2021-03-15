import m from 'mithril';

var ClosureCounter = function() {
    var number = 0;

    return {
        view: function() {
            return m('div',
                m('h2', 'Closure Counter with Local State'),

                m('p',
                    'Encapsulated, local state using closures. Look ma, no hooks!',
                    m('br'),
                    'This is the Mithril community\'s favorite approach to local state.',
                    
                    m('br'),
                    m('em', 'Note: '),
                    'Class Components are supported, but Functional Components are preferred (and work in IE11 out of the box).'
                ),

                m('h2', number),

                m('button', {
                    onclick: function() { number += 1; }
                }, 'increment'),

                m('button', {
                    onclick: function() { number -= 1; }
                }, 'decrement')
            )
        }
    };
};

export default ClosureCounter;
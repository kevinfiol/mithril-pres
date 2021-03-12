import m from 'mithril';

var divStyles = {
    padding: '1rem',
    background: 'rgba(0, 0, 0, 0.1)'
};

var Styling = {
    view: function() {
        return m('div', { style: divStyles },
            m('p',
                'Rendering elements with styles or attributes is easy!'
            ),

            m('h2', {
                style: { fontFamily: 'Comic Sans MS, cursive', color: 'yellow' }
            }, 'Stylish!'),

            m('p', 'The following button is disabled: '),

            m('button[disabled]', 'you can\'t click me ')
        );
    }
};

export default Styling;
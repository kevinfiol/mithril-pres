import m from 'mithril';

var divStyles = {
    padding: '1rem',
    background: 'rgba(0, 0, 0, 0.1)'
};

var Styling = {
    view: function() {
        return m('div',
            m('h2', 'Styling & Attributes'),

            // <div class="my-div" style="padding: 1rem; background: rgba(0, 0, 0, 0.1)">...</div>
            m('div', { className: 'my-div', style: divStyles },
                m('p',
                    'Rendering elements with styles or attributes is easy!'
                ),

                m('h2', {
                    style: { fontFamily: 'Comic Sans MS, cursive', color: 'yellow' }
                }, 'Stylish!'),

                m('p', 'The following button is disabled using HTML attributes: '),

                m('button[disabled="true"]', 'you can\'t click me ')
            )
        );
    }
};

export default Styling;
import m from 'mithril';

var End = {
    view: function() {
        return m('div',
            m('h2', 'The End.'),
            m('p',
                'I hope you\'ve enjoyed this presentation. The code for this presentation can be found on ',
                m('a', { href: 'https://github.com/kevinfiol/mithril-pres' }, 'Github.'),
            ),

            m('p',
                'Make sure to checkout the official ',
                m('a', { href: 'https://mithril.js.org' }, 'Mithril website'),
                ' as well as the ',
                m('a', { href: 'https://gitter.im/mithriljs/mithril.js' }, 'Mithril Chatroom'),
                ' in case you need help. It\'s always active and always friendly.'
            )
        );
    }
};

export default End;
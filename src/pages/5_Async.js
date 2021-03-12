import m from 'mithril';

var timer = 0;

setInterval(function() {
    timer += 1;
    m.redraw();
}, 1000);

var Async = {
    oninit: function() {
        // component initialization
        timer = 0;
    },

    view: function() {
        return m('div',
            m('p',
                'If an asynchronous event happens outside of Mithril,',
                ' you can trigger a manual redraw to let Mithril know when to redraw.',
                ' This is called a "manual redraw".'
            ),

            m('h2', 'Seconds: ' + timer)
        );
    }
};

export default Async;
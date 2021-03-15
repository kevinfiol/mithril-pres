import m from 'mithril';

var seconds = 0;
var timer = undefined;

var Async = {
    oninit: function() {
        // component initialization
        seconds = 0;

        timer = setInterval(function() {
            seconds += 1;
            m.redraw();
        }, 1000);
    },

    onremove: function() {
        // component removal
        clearInterval(timer);
    },

    view: function() {
        return m('div',
            m('h2', 'Async and Lifecycle Methods'),

            m('p',
                'If an asynchronous event happens outside of Mithril,',
                ' you can trigger a manual redraw using ', m('code', 'm.redraw()'), ' to let Mithril know when to refresh the view.',
                ' This is called a "manual redraw".'
            ),

            m('p',
                'This example uses ',
                m('code', 'setInterval')
            ),

            m('h2', 'Seconds: ' + seconds)
        );
    }
};

export default Async;
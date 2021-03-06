import m from 'mithril';

var RouteParams = {
    view: function(vnode) {
        return m('div',
            m('h2', 'Route Parameters'),
            m('p', 'Mithril\'s built-in router also provides support for route parameters.'),
            m('p', 'Change the parameter in the URL, and watch the page content change!'),

            m('h3', 'The current user is: '),
            m('h3', vnode.attrs.user)
        );
    }
};

export default RouteParams;
import m from 'mithril';

// pages
import HelloWorld from './pages/0_HelloWorld.js';
import Styling from './pages/1_Styling.js';
import State from './pages/2_State.js';
import Counter from './pages/3_Counter.js';
import ClosureCounter from './pages/4_ClosureCounter.js';
import Async from './pages/5_Async.js';
import DataBinding from './pages/6_DataBinding.js';
import ChildComponents from './pages/7_ChildComponents.js';
import DataMapping from './pages/8_DataMapping.js';

// global state for current page
var currentPage = 0;

var pages = [
    '/',
    '/styling',
    '/state',
    '/counter',
    '/closure_counter',
    '/async',
    '/databinding',
    '/child_components',
    '/data_mapping'
];

var setPage = function(pageIndex) {
    m.route.set(pages[pageIndex]);
};

var Layout = {
    view: function(vnode) {
        return m('div',
            m('nav',
                m('button', {
                    disabled: pages[currentPage - 1] == undefined,
                    onclick: function() { setPage(currentPage - 1) }
                }, 'prev'),

                m('button', {
                    disabled: pages[currentPage + 1] == undefined,
                    onclick: function() { setPage(currentPage + 1) }
                }, 'next')
            ),

            m('div', { style: { padding: '2rem 0' } },
                vnode.children
            )
        );
    }
};

m.route.prefix = '';

m.route(document.getElementById('app'), '/', {
    '/': {
        onmatch: function() {
            currentPage = 0;
        },
        render: function() {
            return m(Layout, m(HelloWorld));
        }
    },

    '/styling': {
        onmatch: function() {
            currentPage = 1;
        },
        render: function() {
            return m(Layout, m(Styling));
        }
    },

    '/state': {
        onmatch: function() {
            currentPage = 2;
        },
        render: function() {
            return m(Layout, m(State));
        }
    },

    '/counter': {
        onmatch: function() {
            currentPage = 3;
        },
        render: function() {
            return m(Layout, m(Counter));
        }
    },

    '/closure_counter': {
        onmatch: function() {
            currentPage = 4;
        },
        render: function() {
            return m(Layout, m(ClosureCounter));
        }
    },

    '/async': {
        onmatch: function() {
            currentPage = 5;
        },
        render: function() {
            return m(Layout, m(Async));
        }
    },

    '/databinding': {
        onmatch: function() {
            currentPage = 6;
        },
        render: function() {
            return m(Layout, m(DataBinding));
        }
    },

    '/child_components': {
        onmatch: function() {
            currentPage = 7;
        },
        render: function() {
            return m(Layout, m(ChildComponents));
        }
    },

    '/data_mapping': {
        onmatch: function() {
            currentPage = 8;
        },
        render: function() {
            return m(Layout, m(DataMapping));
        }
    }
});
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
import ThirdPartyLibrary from './pages/9_ThirdPartyLibrary.js';
import Requests from './pages/10_Requests.js';
import RouteParams from './pages/11_RouteParams';
import Streams from './pages/12_Streams.js';
import JSX from './pages/13_JSX.js';
import End from './pages/14_End.js';

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
    '/data_mapping',
    '/third_party_library_integration',
    '/requests',
    '/route_params/kevin',
    '/streams',
    '/jsx',
    '/end'
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

// https://mithril.js.org/route.html#mrouteprefix
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
    },

    '/third_party_library_integration': {
        onmatch: function() {
            currentPage = 9;
        },
        render: function() {
            return m(Layout, m(ThirdPartyLibrary));
        }
    },

    '/requests': {
        onmatch: function() {
            currentPage = 10;
        },
        render: function() {
            return m(Layout, m(Requests));
        }
    },

    '/route_params/:user': {
        onmatch: function() {
            currentPage = 11;
        },
        render: function(vnode) {
            return m(Layout, m(RouteParams, { user: vnode.attrs.user }));
        }
    },

    '/streams': {
        onmatch: function() {
            currentPage = 12;
        },
        render: function() {
            return m(Layout, m(Streams));
        }
    },

    '/jsx': {
        onmatch: function() {
            currentPage = 13;
        },
        render: function() {
            return m(Layout, m(JSX));
        }
    },

    '/end': {
        onmatch: function() {
            currentPage = 14;
        },
        render: function() {
            return m(Layout, m(End));
        }
    }
});
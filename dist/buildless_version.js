(function(m, stream, leaflet) {
    'use strict';

    // 0
    var HelloWorld = {
        view: function() {
            // <h2>Hello World (from Mithril.js)</h2>
            return m('h2', 'Hello World (from Mithril.js). This is app was made without build tools!');
        }
    };

    // 1
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

    // 2
    var foo = 42;
    var isOn = false;

    var State = {
        view: function() {
            return m('div',
                m('h2', 'State'),

                'This state is in our lexical scope, and therefore, valid: ',
                m('h2', foo),

                m('p',
                    'You can dynamically add/remove CSS classes as well. This example leverages a boolean value as state to add or remove a CSS class.'
                ),

                m('button', {
                    className: isOn ? 'on' : '',
                    onclick: function() { isOn = !isOn }
                }, isOn ? 'turn off' : 'turn on')
            )
        }
    };

    // 3
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

    // 4
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

    // 5
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

    // 6
    var DataBinding = function() {
        var inputValue = 'Default User';

        return {
            view: function() {
                return m('div',
                    m('h2', 'Data-binding'),

                    m('p',
                        'Databinding involves capturing event values and binding them to your application state.'
                    ),

                    m('label', 'enter username:'),
                    m('input', {
                        type: 'text',
                        value: inputValue,
                        oninput: function(ev) { inputValue = ev.target.value; }
                    }),

                    m('h3', 'The current user is: ',
                        inputValue ? inputValue : m('em', '<empty string>')
                    )
                )
            }
        };
    };

    // 7
    var employeeStyles = {
        padding: '0.6rem',
        margin: '0.6rem auto',
        background: 'rgba(0, 0, 0, 0.1)'
    };

    var Employee = {
        view: function(vnode) {
            return m('div', { style: employeeStyles },
                m('h4', 'Employee #' + vnode.attrs.number),
                m('p', 'name: ' + vnode.attrs.name)
            );
        }
    };

    var ChildComponents = {
        view: function() {
            return m('div',
                m('h2', 'Child Components and attrs'),

                m('p',
                    'Component composition is easy! Pass component properties using ',
                    m('code', 'vnode.attrs'),
                    '.',
                    ' (attrs are to Mithril what props are to React)'
                ),

                m('h2', 'List of Employees'),

                m('h3', 'These are child components: '),

                m(Employee, {
                    number: 1,
                    name: 'Andrew'
                }),

                m(Employee, {
                    number: 2,
                    name: 'Kevin'
                }),

                m(Employee, {
                    number: 3,
                    name: 'Wan Soo'
                })
            );
        }
    };

    // 8
    var employees = [
        { number: 1, name: 'Andrew' },
        { number: 2, name: 'Kevin' },
        { number: 3, name: 'Wan Soo' }
    ];

    var DataMapping = {
        view: function() {
            return m('div',
                m('h2', 'Child Components (cont.)'),

                m('p',
                    'You can easily use JavaScript Array methods to map data to your templates!',
                    ' This example is the same as the last, but using ',
                    m('code', 'Array.map'),
                    ' to reduce repetition.'
                ),

                m('h2', 'List of Employees'),

                m('h3', 'These are child components: '),

                employees.map(function(employee) {
                    return m(Employee, {
                        number: employee.number,
                        name: employee.name
                    });
                })
            );
        }
    };

    // 9
    var leafletMap;

    var ThirdPartyLibrary = {
        oncreate: function(vnode) {
            var mapEl = vnode.dom.querySelector('#map');

            leafletMap = leaflet.map(mapEl, {
                center: [38.89, -77.03],
                zoom: 14
            });

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: ['a','b','c']
            }).addTo(leafletMap);


            leaflet.marker([38.89, -77.03]).addTo(leafletMap)
                .bindPopup('Welcome to Washington D.C.')
                .openPopup();
        },

        onremove: function() {
            leafletMap.remove();
            leafletMap = undefined;
        },

        view: function() {
            return m('div',
                m('h2', 'Third-Party Library Integration'),

                m('p',
                    'Mithril\'s lifecycle hooks are especially useful for integrating third-party libraries.'
                ),

                m('div', { id: 'map', style: { height: '400px' } })
            );
        }
    };

    // 10
    var Requests = function() {
        var loading = false;
        var characters = undefined;
        var inputValue = '';

        return {
            view: function() {
                return m('div',
                    m('h2', 'Requests'),

                    m('p',
                        'This example uses the built-in request utility, ', m('code', 'm.request'),
                        '. Mithril comes with a minimal Promise polyfill, so this works in IE11 out of the box.',
                        ' Data from: ',
                        m('a', { href: 'https://swapi.dev' }, 'swapi.dev')
                    ),

                    m('label', 'search for star wars character:'),

                    m('input', {
                        type: 'text',
                        value: inputValue,
                        oninput: function(ev) { inputValue = ev.target.value; }
                    }),

                    m('button', {
                        disabled: inputValue.trim() < 1 || loading,
                        onclick: function() {
                            loading = true;
                            submitSearch(inputValue).then(function(results) {
                                characters = results;
                                loading = false;
                            }).catch(function(emptyArr) {
                                characters = emptyArr;
                                loading = false;
                            });
                        }
                    }, loading ? 'loading...' : 'search'),

                    m('h3', 'results:'),
                    characters
                        ? m('pre', JSON.stringify(characters, null, 2))
                        : m('em', 'No results.')
                    ,
                )
            }
        };
    };

    function submitSearch(inputValue) {
        return m.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/',
            params: { search: inputValue }
        }).then(function(response) {
            return response.results;
        }).catch(function(error) {
            console.error(error);
            return [];
        });
    }

    // 11
    var RouteParams = {
        view: function(vnode) {
            return m('div',
                m('h2', 'Route Parameters'),
                m('p',
                    'Mithril\'s built-in router also provides support for route parameters.',
                    ' Change the parameter in the URL, and watch the page content change!'
                ),

                m('h3', 'The current user is: ' + vnode.attrs.user)
            );
        }
    };

    // 12
    var Streams = function() {
        var x = stream(10);
        var y = stream(20);

        // use streams to describe reactive relationships
        var sum = stream.combine(function(x, y) {
            return x() + y();
        }, [x, y]);

        var product = stream.combine(function(x, y) {
            return x() * y();
        }, [x, y]);

        return {
            view: function() {
                return m('div',
                    m('h2', 'Streams'),

                    m('p',
                        'Streams are an observable, reactive data structure that allow you to describe the relationships between variables.',
                        ' Streams are useful for implementing computed properties, and bi-directional data-bindings.'
                    ),

                    // controls for x & y
                    m('h3', 'x:'),
                    m('input[type="number"]', {
                        value: x(),
                        oninput: function(ev) { x(parseInt(ev.target.value)) } // need to do oninput too?
                    }),

                    m('h3', 'y:'),
                    m('input[type="number"]', {
                        value: y(),
                        oninput: function(ev) { y(parseInt(ev.target.value)) }
                    }),

                    m('h3', 'sum of x and y: ', sum()),
                    m('h3', 'product of x and y: ', product())
                );
            }
        };
    };

    // 13
    var JSX = {
        view: function() {
            return m('div',
                m('h2', 'JSX'),
                m('p', 'You could use JSX with Mithril.js as well.'),
                m('p', 'But this example doesn\'t use it because this is the no-build version.')
            );
        }
    };

    // 14
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

    // app
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
})(window.m, window.m.stream, L);
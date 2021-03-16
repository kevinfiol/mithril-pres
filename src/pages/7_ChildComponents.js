import m from 'mithril';

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
                m('code', 'vnode.attrs')
            ),

            m('p','attrs are to Mithril what props are to React'),

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

export default ChildComponents;
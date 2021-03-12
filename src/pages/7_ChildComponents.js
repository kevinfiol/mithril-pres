import m from 'mithril';

var Employee = {
    view: function(vnode) {
        return [
            m('h4', 'Employee #' + vnode.attrs.number),
            m('p', 'name: ' + vnode.attrs.name)
        ];
    }
};

var ChildComponents = {
    view: function() {
        return m('div',
            m('p',
                'Using component composition is easy! Pass component properties using ',
                m('code', 'vnode.attrs'),
                '.'
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

export default ChildComponents;
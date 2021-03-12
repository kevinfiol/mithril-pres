import m from 'mithril';

var employees = [
    { number: 1, name: 'Andrew' },
    { number: 2, name: 'Kevin' },
    { number: 3, name: 'Wan Soo' }
];

var Employee = {
    view: function(vnode) {
        return [
            m('h4', 'Employee #' + vnode.attrs.number),
            m('p', 'name: ' + vnode.attrs.name)
        ];
    }
};

var DataMapping = {
    view: function() {
        return m('div',
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

export default DataMapping;
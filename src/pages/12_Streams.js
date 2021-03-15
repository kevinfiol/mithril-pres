import m from 'mithril';
import stream from 'mithril/stream';

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
                ),

                // controls for x & y
                m('h3', 'x:'),
                m('input[type="number"]', {
                    value: x(),
                    onchange: function(ev) { x(parseInt(ev.target.value)) } // need to do oninput too?
                }),

                m('h3', 'y:'),
                m('input[type="number"]', {
                    value: y(),
                    onchange: function(ev) { y(parseInt(ev.target.value)) }
                }),

                m('h3', 'sum of x and y: ', sum()),
                m('h3', 'product of x and y: ', product())
            );
        }
    };
};

export default Streams;
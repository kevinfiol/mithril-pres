import m from 'mithril';

var JSX = {
    view: function() {
        return (
            <div>
                <h2>JSX</h2>
                <p>You could use JSX with Mithril.js as well.</p>
                <p>Be aware that this requires a build-step.</p>
                <p style={{ color: 'red' }}>
                    Attributes work as expected.
                </p>
                <p>This application uses <a href="https://esbuild.github.io/">esbuild</a> to convert JSX.</p>
            </div>
        );
    }
};

export default JSX;
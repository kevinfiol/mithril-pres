import m from 'mithril';
import leaflet from 'leaflet';

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

export default ThirdPartyLibrary;
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const LandMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-84.5, 50],
            zoom: 2,
            attributionControl: false
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        return () => {
            map.current.remove();
        };
    }, []);

    return <div style={{ height: '500px', width: '100%' }}>
        <div ref={mapContainer} style={{ height: '100%', width: '100%' }} />
    </div>
};

export default LandMap;

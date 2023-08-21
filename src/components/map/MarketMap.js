import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const MarketMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9,
            attributionControl: false     });

        map.current.addControl(new mapboxgl.NavigationControl());

        return () => {
            map.current.remove();
        };
    }, []);

    return <div>
        <div ref={mapContainer}  style={{height: '300px' }} />
        {/* <div className="map-controls">
            <button
                className="map-control-button"
                onClick={() => map.current.zoomIn()}
            >
                Zoom In
            </button>
            <button
                className="map-control-button"
                onClick={() => map.current.zoomOut()}
            >
                Zoom Out
            </button>
        </div> */}
    </div>;
};

export default MarketMap;

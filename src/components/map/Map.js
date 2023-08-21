// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';

// const Map = () => {
//     const mapContainer = useRef(null);
//     const map = useRef(null);

//     useEffect(() => {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [-74.5, 40],
//             zoom: 9,
//         });

//         map.current.addControl(new mapboxgl.NavigationControl());

//         return () => {
//             map.current.remove();
//         };
//     }, []);

//     return <div>
//         <div ref={mapContainer} style={{ height: '400px' }} />
//         {/* <div className="map-controls">
//             <button
//                 className="map-control-button"
//                 onClick={() => map.current.zoomIn()}
//             >
//                 Zoom In
//             </button>
//             <button
//                 className="map-control-button"
//                 onClick={() => map.current.zoomOut()}
//             >
//                 Zoom Out
//             </button>
//         </div> */}
//     </div>;
// };

// export default Map;
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import Img from "../../../assets/location.jpg";

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

        // Initialize the map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.8600012, 40.7933942], // Set the initial center to the coordinates of State College, PA
            zoom: 16, // Zoom in to show a closer view
            attributionControl: false,
        });

        map.current.addControl(new mapboxgl.NavigationControl());

        // Create a custom marker element
        const markerElement = document.createElement('div');
        markerElement.style.backgroundImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Flocation-mark&psig=AOvVaw20Yy2dvdIwQ2ydph5lil2j&ust=1690028646824000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOii073ln4ADFQAAAAAdAAAAABAE' // Replace this URL with the valid image URL
        markerElement.style.width = '150px';
        markerElement.style.height = '150px';
        markerElement.style.backgroundSize = 'cover';

        // Set the coordinates for "367 W Clearview Ave, State College, PA 16803"
        const lngLat = [-77.90001733208291,   40.81033521850944];
      
        // Add a marker to the map
        markerRef.current = new mapboxgl.Marker(markerElement)
            .setLngLat(lngLat)
            .addTo(map.current);
    
        // Center the map on the selected location and adjust zoom to fit the marker
        map.current.fitBounds(new mapboxgl.LngLatBounds(lngLat, lngLat), {
            padding: 50, // Adjust the padding as needed to ensure the marker is visible
            maxZoom: 16, // You can adjust the maximum zoom level if required
        });
    
        // Resize the map when the window size changes to make it responsive
        window.addEventListener('resize', () => {
            map.current.resize();
        });
        return () => {
            map.current.remove();
        };
    }, []);

    return (
        <div >
            <div className='h-[300px] lg:h-[400px] w-full' ref={mapContainer} />
        </div>
    );
};

export default Map;



// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';

// const Map = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

  


  

//   useEffect(() => {
//     mapboxgl.accessToken =
//       'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-74.5, 40],
//       zoom: 14,
//     });

//     map.current.addControl(new mapboxgl.NavigationControl());

//     const placeName = '367 W Clearview Ave, State College'; // Specific location address

//     // Use Mapbox Geocoding API directly via fetch
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//         placeName
//       )}.json?access_token=${mapboxgl.accessToken}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const [longitude, latitude] = data.features[0].center;

//         // Set the center of the map to the specific place
//         map.current.setCenter([longitude, latitude]);

//         // Add a marker to the map
//         new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.current);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });

//     return () => {
//       map.current.remove();
//     };
//   }, []);

//   return <div className="z-100 h-64 m-0 p-0" style={{ height: '400px', width: '100%', margin: 0, padding: 0 }}   ref={mapContainer} />;
// };

// export default Map;

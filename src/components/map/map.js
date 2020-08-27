import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './mapContainer'
export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyDUXH6i4ccfEy29b49aNfnjx0TrbLwNO9A',
    }
    ))(MapContainer)

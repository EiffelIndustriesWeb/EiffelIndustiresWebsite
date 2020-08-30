import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './mapContainer'

export default GoogleApiWrapper(
    (props) => ({
        apiKey: process.env.GOOGLE_MAPS_STATIC_API_KEY,
    }
    ))(MapContainer)

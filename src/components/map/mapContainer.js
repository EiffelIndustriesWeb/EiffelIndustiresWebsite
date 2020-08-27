import React from 'react'
import { Map, Marker, InfoWindow } from 'google-maps-react';

export default function MapContainer(props) {
    const style = {
        width: '100%',
        height: '100%'
    }

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '40vh'
    }

    return (
        <>
            <Map google={props.google}
                containerStyle={containerStyle}
                style={style}
                initialCenter={{
                    lat: 33.4755261,
                    lng: -111.90842
                }}
                zoom={15}
            >
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'EIFFEL INDUSTRIESE'}
                    position={{
                        lat: 33.4755261,
                        lng: -111.90842
                    }}>
                    <InfoWindow
                        visible={true}
                    >
                        <div >
                            <p>Click on the map or drag the marker to select location where the incident occurred</p>
                        </div>
                    </InfoWindow>
                </Marker>
            </Map >
        </>
    )
}

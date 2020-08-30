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

    async function handleMarker() {
        window.location.href = 'https://www.google.com/maps/place/2501+N+Hayden+Rd+%23101,+Scottsdale,+AZ+85257/data=!4m2!3m1!1s0x872b0bd590c8ec63:0x7f1b2dd9ddf297de?sa=X&ved=2ahUKEwi4tuzdv7zrAhXWpJ4KHbYBAxUQ8gEwAHoECAsQAQ'
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
                    onClick={() => handleMarker()}
                    title={'Visit'}
                    name={'EIFFEL INDUSTRIES'}
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

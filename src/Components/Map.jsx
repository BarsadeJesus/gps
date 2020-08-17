import React from "react"

import{
    GoogleMap,
    withScriptjs,
    withGoogleMap,
  } from "react-google-maps";

  const Map = (props) => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter = {{ lat:-12.142500, lng:-77.006130 }} /> 
    );
  }

  export default withScriptjs(
    withGoogleMap(
      Map
    )
  )
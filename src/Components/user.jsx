import React, {ReactFragment} from "react";
import Map from "./Map";
import Credential from "../credentials.js";

  const mapURL= `https://maps.googleapis.com/maps/api/js?&key=${Credential.mapsKey}`
  
  const mostrar = (event) =>{
    event.preventDefault();
    console.log("patyyy")
    console.log(mapURL);
    return (
     
        <ReactFragment>
     <p>Mapapa</p>
     
      {/* <div>
      <Map googleMapURL={mapURL}
      containerElement= {<div style={{height:"400px"}} />}
      mapElement= {<div style={{height:"100%"}} />}
      loadingElement={<p>Cargando</p>}
     />
     </div> */}
     </ReactFragment>
    
    )
  }
 
    const User = ({sendPass}) => {
    console.log(sendPass)
      return(
         <div className="menubody">
 
       
      {/* <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
              <a class="navbar-brand" href="#">Registro</a>
              <a class="navbar-brand" href="#">Mapa</a>
              <a class="navbar-brand" href="#">Datos</a>
            </nav>
          </div> */} 
       
     
     <button onClick={mostrar}>Mostrar Mapa</button>
           
         
        
        </div>
       
       
      )
    }
export default User;

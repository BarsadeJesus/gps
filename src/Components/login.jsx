import React, {useState} from "react"
//import { faSignin } from '@fortawesome/react-fontawesome';

const Login = ({getPass}) => {
 
  const [nameUser, setNameUser] = useState ();
  const [passUser, setPassUser] = useState ();
  let name = "";
  let pass = "";
  

  const getNameUser = (event) => {
    name = event.target.value ;
  }
  const getPassUser = (event) => {
    pass = event.target.value ;
  }
  const sendPassUser = (event) => {
    event.preventDefault();
    //alert("Hola:"+ pswUser);
    if (name.length === 0) {
      setNameUser("error de usuario");
    } else {
      if (pass.length ===0 ){
        alert("Ingrese una contrasena correcta")
      }  else {
        getPass(pass);
    }
    }
  

  }
  //console.log(pswUser)
  return (
    <div className="modal-dialog text-center">
      <div className="col-sm-8 main-section">
        <div className="modal-content">
          <div className="col-12 user-img">
            <img src="user1.png" alt="img-user" />
          </div>
          <form className="col-12">
            <div className="form-group" id="user-group">
              <input type="text" className="form-control" onChange={getNameUser} placeholder="Nombre de usuario" />
  <p id="error" >{nameUser}</p>
            </div>
            <div className="form-group" id="contrasena-group">
              <input type="password" className="form-control" onChange={getPassUser} placeholder="Contrasena" />
              <p id="error" >{nameUser}</p>
            </div>
            <button type="submit" className="btn btn-primary" onClick={sendPassUser}><i className="fas fa-sign-in-alt" />  Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
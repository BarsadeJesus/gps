import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Login from "../Components/login"
import User from "../Components/user"
import User2 from "../Components/user2"
import Administrator from "../Components/administrator"

function ViewLogin() {
  let [pswUser, setPswUser] = useState ();
  //const [map, setMap]= useState();
  const [buttonClicked, setButtonClicked] = useState(false)
  const getPass = (passwrd) => {
    setPswUser(passwrd);
    setButtonClicked(true)
  }
  console.log(pswUser)
  return (
    <div className="App">
          {/* {buttonClicked ? ( pswUser==="123" ? (
            <User sendPass={pswUser} />
          ):<User2 sendPass={pswUser} />
        ):<Login getPass={getPass} /> } */}
        {buttonClicked ? ( pswUser==="123" ?( 
          <User sendPass={pswUser} />
          ):pswUser="administrador" ? (
            <Administrator sendPass={pswUser} />
        ):<User2 sendPass={pswUser} />
        ):<Login getPass={getPass} /> }
    </div>
  );
}

export default ViewLogin;
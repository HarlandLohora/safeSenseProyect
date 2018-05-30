import React from "react";
import {Switch, Router} from "react-router";
import firebase from "firebase";
import HomePage from "./components/Main";
import viewPatient from "./components/viewP/viewPatient"
import viewDoctor from "./components/viewD/viewDoctor"
import {Route} from "react-router-dom";

export const Routes=()=>{firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  //window.location = "/profile"
  var usernew = firebase.auth().currentUser;

usernew.sendEmailVerification().then(function() {
  console.log("Mensaje enviado a: "+usernew.email);
}).catch(function(error) {
  // An error happened.
});
} else {
  //window.location = "/"
}
});
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={viewPatient}/>
            <Route path="/doctor" component={viewDoctor}/>
        </Switch>
    );
}

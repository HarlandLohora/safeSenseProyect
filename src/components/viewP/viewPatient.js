import React,{Component} from "react";
import * as firebase from "firebase";
import Chat from "../chat";
import * as toastr from "toastr";


class viewPatient extends Component{


  state = {
    user: {},
    files:[],
    recetas:[],
    list:[]
  }




  componentWillMount(){
    firebase.database().ref("recetas/").on("value",snapshot=>{
      const recipes = snapshot.val();
      const arrRecipes = [recipes]
      if(recipes !== null){
        let recetas = this.state.recetas.push(recipes);
        console.log("res",recipes);

        this.setState({
          recetas
        })
      }
    })
    firebase.auth().onAuthStateChanged((user) =>{
  if (user) {
    var name = user.displayName;
    this.setState({user})
    if(this.state.user.email!="lohoraharland@gmail.com"){

    }

  } else {

  }})

  firebase.database().ref("files/").on("value",snapshot=>{
    const currentFiles = snapshot.val();
    if(currentFiles !== null){
      this.setState({
        files:currentFiles
      })
    }

  })
  }

  cerrar(){
    firebase.auth().signOut().then(function() {
    window.location.href="/"
}).catch(function(error) {
  // An error happened.
});
  }

  loadFile = (e) => {
    console.log(e);
    var uploader   = document.getElementById("uploader");
      //var alert = document.getElementById("alert");
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref("files/"+file.name);
    var task = storageRef.put(file);
    toastr.success("Archivo subido satisfactoriamente");
    document.getElementById("documentos").innerHTML+= `<p>${file.name}</p>`;
    alert(file.name);
  }


  render(){
    console.log("sdasdasdasd",this.state.list);
    return(
      <div>
      <Chat/>
      <div className="alert alert-success" id="alert" role="alert">
        Se subió correctamente su archivo
      </div>



      <div className="modal fade" id="access" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLongTitle">Panel</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div className="modal-body">
                 <h3 onClick={this.cerrar}><a>Cerrar Sesión</a></h3>
               </div>

             </div>
           </div>
         </div>




         <div className="modal fade" id="contacto" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Dr. José Villanueva</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h3>Médico general</h3>
                    <i className="icon-phone text-primary"><span> </span>5540856635</i>
                    <br/>
                    <i className="icon-envelope text-primary"><span> </span><a href="mailto:dr.jose.villanueva18@gmail.com" className="text-primary">dr.jose.villanueva18@gmail.com</a></i>
                    <br/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.2790630973636!2d-99.13233668553224!3d19.486626044001373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff8c00000000%3A0x1b5b45a44293f318!2sHospital+Angeles+Lindavista!5e0!3m2!1ses!2smx!4v1527685726744" width="400" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                  </div>

                </div>
              </div>
            </div>




         <div className="modal fade" id="upload" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Selecionar archivo</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input type="file" id="fileButton" onChange={this.loadFile}/>
                  </div>

                </div>
              </div>
            </div>

        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
          <a className="navbar-brand br">Safe Sense</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">  <span className="sr-only">(current)</span></a>
              </li>
            </ul>


              <img src={this.state.user.photoURL} className="pictureNavbar float-right" data-target="#access" data-toggle="modal"/>

          </div>
          </nav>

          <h2 className="text-center my-3">Hola {this.state.user.displayName} </h2>

          <div className="row my-5">
          <div className="col-2">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Inicio</a>
          <a className="nav-link" id="v-pills-historial-tab" data-toggle="pill" href="#v-pills-historial" role="tab" aria-controls="v-pills-historial" aria-selected="true">Historial</a>
          <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Perfil</a>
          <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Contactos</a>

          </div>
          </div>

          <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <div className="card mx-auto" style={{width:"300px"}}>

<div className="card-body">
  <h5 className="card-title">Subir Archivo</h5>
  <p className="card-text">Sube aqui tus estudios médicos</p>
  <div>
  <form>
  <p className="file">
    <input type="file" name="file" id="file" onChange={this.loadFile}/>
    <label htmlFor="file">Subir archivo</label>
  </p>
</form>

  </div>

</div>

</div>
<br/>
  <h2 className="text-primary">Archivos subidos</h2>
  <div id="documentos">

  </div>
          </div>

          <div className="tab-pane fade" id="v-pills-historial" role="tabpanel" aria-labelledby="v-pills-historial-tab">

            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="col-3">

                  
                </div>
                <div className="col-3">

                </div>
                <div className="col-3">

                </div>
              </div>
            </div>
            </div>

          </div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <form>

              <div>
                <img src={this.state.user.photoURL} className="rounded mx-auto d-block pictureProfile mb-3"/>
              </div>

              <div className="form-group row">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputname" value={this.state.user.displayName}/>
                </div>
              </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" value={this.state.user.email}/>
            </div>
          </div>

          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Role</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Paciente
                  </label>
                </div>

              </div>
            </div>
          </fieldset>
          <div className="form-group row">

          </div>

          </form>

          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" data-target="#contacto" data-toggle="modal">
            <div className="card text-white bg-primary mb-3">
            <div className="card-header"><img src="https://lorenberg.files.wordpress.com/2013/04/doctor-image.jpg" className="pictureMessage mx-auto d-block"/></div>
            <div className="card-body">
              <h5 className="card-title">Dr. José Villanueva</h5>
              <p className="card-text">Médico general</p>

            </div>
          </div>

          </div>
          <div className="tab-pane fade" id="v-pills-config" role="tabpanel" aria-labelledby="v-pills-config-tab">

          <div className="form-group row">
            <div className="col-sm-10">
              Cambiar contrasaña
            </div>
          </div>
          </div>


          </div>
          </div>
          </div>



      </div>
    );
  }
}

export default viewPatient;

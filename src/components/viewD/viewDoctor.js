import React,{Component} from "react";
import * as firebase from "firebase";
import Chat from "../chat";
import * as toastr from "toastr";


class viewDoctor extends Component{


  state = {
    user: {},
    files:[]
  }


  componentWillMount(){
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
    alert(file.name);
  }

  handleSubmit(e){
    e.preventDefault();
    var sint = document.getElementById("Sintomas").value;
    var rec  = document.getElementById("Recomendaciones").value;
    var medi = document.getElementById("Medicina").value;
    var hor  = document.getElementById("Horario").value;
    var des  = document.getElementById("Desde").value;
    var has  = document.getElementById("Hasta").value;
    console.log(sint+" "+rec+" "+medi+" "+ hor +" "+ des +" "+has);
    const newRecipe = {
      id: sint,
      recomendaciones: rec,
      medicinas: medi,
      horario: hor,
      desde: des,
      hasta: has
    };
    //list.push(newMessage);
    //this.setState({messages:list});
    toastr.success("Receta añadida correctamente")
    firebase.database().ref(`recetas/${newRecipe.id}`)
      .set(newRecipe);
      document.getElementById("Sintomas").value="";
      document.getElementById("Recomendaciones").value=""
      document.getElementById("Medicina").value=""
      document.getElementById("Horario").value=""
      document.getElementById("Desde").value=""
      document.getElementById("Hasta").value=""
  }

  render(){

    console.log(this.state)
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
                    <h5 className="modal-title" id="exampleModalLongTitle">Harland Yatzet Lohora Espinoza</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h3>Paciente</h3>
                    <img src="https://firebasestorage.googleapis.com/v0/b/safe-sense.appspot.com/o/pacientes%2Fme.jpg?alt=media&token=04fa0ab7-7df0-4b80-917f-4ff4ec6e42fa"/><br/>
                    <i className="icon-phone text-primary"><span> </span>5529416818</i>
                    <br/>
                    <i className="icon-envelope text-primary"><span> </span><a href="mailto:lohoraharland@gmail.com" className="text-primary">lohoraharland@gmail.com</a></i>
                    <br/>
                  </div>

                </div>
              </div>
            </div>

            <div className="modal fade" id="receta" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                     <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLongTitle">Agregar receta</h5>
                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div className="modal-body">
                     <form id="receta" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                          <div className="col">
                            <input type="text" className="form-control" placeholder="Sintomas" id="Sintomas"/>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Recomendaciones" id="Recomendaciones"/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                          <input type="text" className="form-control" placeholder="Medicina" id="Medicina"/>
                        </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <input type="number" className="form-control" placeholder="Cada cuantas horas" id="Horario"/>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col">
                          <h4>Desde</h4>
                          <input type="date" className="form-control" placeholder="desde" id="Desde"/>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                          <h4>Hasta</h4>
                          <input type="date" className="form-control" placeholder="hasta" id="Hasta"/>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col">

                          <input type="submit" value="Listo" className="btn btn-primary"/>
                        </div>
                        </div>
                        </form>
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

          <a className="nav-link" id="v-pills-historial-tab" data-toggle="pill" href="#v-pills-historial" role="tab" aria-controls="v-pills-historial" aria-selected="true">Historial</a>
          <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Perfil</a>
          <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Pacientes</a>

          </div>
          </div>

          <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
          <div className="card mx-auto" style={{width:"300px"}}>



</div>

          </div>
          <div className="tab-pane fade" id="v-pills-historial" role="tabpanel" aria-labelledby="v-pills-historial-tab">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="col-3">
                  018
                </div>
                <div className="col-3">
                  Consulta general
                </div>
                <div className="col-3">
                  Activa
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
                    Doctor
                  </label>
                </div>

              </div>
            </div>
          </fieldset>
          <div className="form-group row">

          </div>

          </form>

          </div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" >

          <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Crear consulta</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td data-target="#contacto" data-toggle="modal">Harland Yatzet Lohora Espinoza</td>
      <td>22</td>
      <td data-target="#receta" data-toggle="modal">+</td>
    </tr>

  </tbody>
</table>

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

export default viewDoctor;

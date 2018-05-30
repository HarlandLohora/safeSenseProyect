import React,{Component} from "react";
import firebase from "firebase";

class Main extends Component{
  handleAuth=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(this.props.history.push('/profile'))
    .catch(error=>alert(error.message));
  }

  render(){
    return(
      <div id="page-top">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top menu" id="mainNav">
      <div className="container">
     <a className="" href="#page-top" className="brand">Safe Sense</a>
     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
       Menu
       <i className="fa fa-bars"></i>
     </button>
     <div className="collapse navbar-collapse" id="navbarResponsive">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger texto" href="#caracteristicas">Características</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger texto" href="#contacto">Contacto</a>
         </li>
         <li className="nav-item">
         <a className="nav-link js-scroll-trigger Acceder texto" href="#" data-target="#access" data-toggle="modal">Acceder</a>
         </li>
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger registrarse texto" href="#" data-target="#signup" data-toggle="modal">Registrarse</a>
         </li>
       </ul>

     </div>
   </div>
 </nav>

 <div className="modal fade" id="access" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Acceder</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailUsuario" placeholder="Correo electrónico"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword" placeholder="Contraseña"/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary center sub">Acceder</button>
                </div>
            </form>
          </div>
          <div className="text-center">
            <p className="recuperar"><a href="#">Recuperar contraseña</a></p>
          </div>

        </div>
      </div>
    </div>

    <div className="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Registrarse</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">

                <a id="login"  onClick={this.handleAuth}><img src="img/google.png" alt="google sign up" className="auth"/></a>
                <img id="face" src="img/facebook.png" alt="facebook sign up" className="auth-face"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="nombre" aria-describedby="nombreUsuario" placeholder="Nombre"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="apellido" aria-describedby="apellidoUsuario" placeholder="Apellido"/>
              </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Repetir Contraseña"/>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary center">Registrarse</button>
                </div>
            </form>
          </div>
          <div className="text-center">
            <p className="recuperar"><a href="#" data-target="#access" data-toggle="modal">Ya tengo cuenta</a></p>
          </div>

        </div>
      </div>
    </div>

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">Cuida tu salud con <i className="fa fa-heart"></i></h1>
              <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger" data-target="#signup" data-toggle="modal">Empieza ahora! Es gratis</a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup imac portrait white">
                <div className="device">
                  <div className="screen">

                    <img src="img/SS.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="button">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>






  <section className="features" id="caracteristicas">
     <div className="container">
       <div className="section-heading text-center">
        <img src="./img/Safe.png" className="logo" />
         <p className="text-muted">Tu salud es lo primero</p>
         <hr/>
       </div>
       <div className="row">
         <div className="col-lg-4 my-auto">
           <div className="device-container">
             <div className="device-mockup ipad portrait white">
               <div className="device">
                 <div className="screen">
                   <img src="img/SS.jpg" className="img-fluid" alt=""/>
                 </div>
                 <div className="button">
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="col-lg-8 my-auto">
           <div className="container-fluid">
             <div className="row">
               <div className="col-lg-6">
                 <div className="feature-item">
                   <i className="icon-screen-desktop text-primary"></i>
                   <h3>Tu historial clínico en la nube</h3>
                   <p className="text-muted">Accede a tu historial clínico desde cualquier parte del mundo</p>
                 </div>
               </div>
               <div className="col-lg-6">
                 <div className="feature-item">
                   <i className="icon-bell text-primary"></i>
                   <h3>Nosotros te recordamos cuando</h3>
                   <p className="text-muted">Recibe un recordatorio de tus medicamentos y citas</p>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-lg-6">
                 <div className="feature-item">
                   <i className="icon-speech text-primary"></i>
                   <h3>¿Necesitas ayuda?</h3>
                   <p className="text-muted">Manda mensajes en tiempo real a tu doctor</p>
                 </div>
               </div>
               <div className="col-lg-6">
                 <div className="feature-item">
                   <i className="icon-directions text-primary"></i>
                   <h3>Vive</h3>
                   <p className="text-muted">Toma la dirección de tu vida</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>




   <section className="cta">
         <div className="cta-content">
           <div className="container">

             <a href="#contacto" className="btn btn-outline btn-xl js-scroll-trigger" data-target="#signup" data-toggle="modal">Registrarse!</a>
           </div>
         </div>
         <div className="overlay"></div>
       </section>

       <section className="contact bg-primary" id="contacto">
         <div className="container">
           <h2>Con <span> </span>
             <i className="fa fa-heart"></i> desde México.
           </h2>
           <ul className="list-inline list-social">
             <li className="list-inline-item social-twitter">
               <a href="https://twitter.com/HarlandLohora">
                 <i className="fa fa-twitter"></i>
               </a>
             </li>
             <li className="list-inline-item social-facebook">
               <a href="https://www.facebook.com/lohoraharland">
                 <i className="fa fa-facebook"></i>
               </a>
             </li>
             <li className="list-inline-item social-github">
               <a href="#">
                 <i className="icon-social-github"></i>
               </a>
             </li>
           </ul>
         </div>
       </section>



       <footer>
      <div className="container">
        <p>&copy; Safe Sense 2018. Todos los derechos reservados.</p>

      </div>
    </footer>
      </div>
    );
  }
}

export default Main;

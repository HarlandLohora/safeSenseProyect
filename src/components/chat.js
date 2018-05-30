import React,{Component} from "react";
import firebase from "firebase";


class Chat extends Component{
  constructor(){
    super();
    this.state={
      message:"",
      messages: [],
      user: {}
    }
  }



  chat() {
      var x = document.getElementById("messages");
      var m = document.getElementById("mes");
      if (x.style.display === "none") {
          x.style.display = "block";
          m.style.display = "block";
      } else {
          x.style.display = "none";
          m.style.display = "none";
      }
  }

  updateMessage(e){
    this.setState({message: e.target.value});
    console.log(this.state.message)
  }

  componentDidMount(){
    firebase.database().ref("messages/").on("value",snapshot=>{
      const currentMessages = snapshot.val();
      if(currentMessages !== null){
        this.setState({
          messages:currentMessages
        })
      }
    })

    firebase.auth().onAuthStateChanged((user) =>{
  if (user) {
    var name = user.displayName;
    this.setState({user})

  } else {
    // No user is signed in.
  }})




  }

  handleSubmit(e){
    e.preventDefault();
    const list = this.state.messages;
    const newMessage = {
      id: this.state.messages.length,
      text: this.state.message,

    };
    //list.push(newMessage);
    //this.setState({messages:list});
    firebase.database().ref(`messages/${newMessage.id}`)
      .set(newMessage);
    this.setState({message:""})
  }


  render(){
    return(
      <div>

      <div className="mensaje">
      <div id="mes">
        {this.state.messages.map(message=>{
          return <p key={message.id}><img src={this.state.messages.email==="lohoraharland@gmail.com" ? "https://firebasestorage.googleapis.com/v0/b/safe-sense.appspot.com/o/pacientes%2Fme.jpg?alt=media&token=04fa0ab7-7df0-4b80-917f-4ff4ec6e42fa":"https://lorenberg.files.wordpress.com/2013/04/doctor-image.jpg"} className="chatImage"/>{message.text}</p>
        })}
      </div>
      <div className="messages" id="messages">
        <form id="test" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Escribe tu mensaje" onChange={this.updateMessage.bind(this)} value={this.state.message}/>
          <div className="send">
            <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}><i className="icon-cursor"></i></button>
          </div>
        </form>

      </div>


      </div>

      <div className="chat">
        <button className="btn btn-primary" onClick={this.chat}>Chat</button>
      </div>
      </div>
    );
  }
}

export default Chat;

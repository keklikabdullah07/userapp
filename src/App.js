import React,{Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends Component{
 
  
  constructor(props){
    super(props); 
    this.state ={
      users:[
        {
          id:1,
          name:"Abdullah Keklik",
          email:"keklikabdullah@gmail.com"
        },
        {
          id:2,
          name:"İsmail Çiftçi",
          email:"ciftcismail@gmail.com"
        },
        {
          id:3,
          name:"Yakup Çiftçi",
          email:"ciftciyakup@gmail.com"
        },
      ]
    };
    this.deleteUser=this.deleteUser.bind(this);
    this.addUser=this.addUser.bind(this);
  }
  addUser(newsUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newsUser);
    this.setState({
      user:updatedUsers
    });
  }
  deleteUser(id){
    
    let updatedUsers=this.state.users;
    updatedUsers=updatedUsers.filter(user=>user.id!==id);
    this.setState ({
      users:updatedUsers
    })
  }
  render(){

  return (
    <div className="container">
      <h1>
        UserApp
      </h1>
      <hr/>
      <AddUser addUser={this.addUser}/>
      <hr/>
      <Users deleteUser = {this.deleteUser} users= {this.state.users}/>
    </div>
  );
}
}

export default App;

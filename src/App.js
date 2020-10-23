import Header from "./Views/Header/Header.js";
import Login from "./Views/Login/Login.js";
import Signup from "./Views/Signup/Signup.js";

export default class App {
  constructor(){
    this.header = new Header;

    if (window.location.pathname === "/login"){
      this.login = new Login;
    } else if (window.location.pathname === "/signup"){
      this.signup = new Signup;
    }
  }
}
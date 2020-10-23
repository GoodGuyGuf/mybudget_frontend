import Login from "./Views/Login/Login.js";

export default class App {
  constructor(){
    this.header = document.createElement("header");

    this.header.innerHTML = `
      <h1 id="Logo">MyBudget</h1>
    `
    document.body.appendChild(this.header);
    
    new Login;
  }
}
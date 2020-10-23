export default class Header {
  constructor(){
    this.element = document.createElement("header");
    this.element.innerHTML = `<h1 id="Logo">MyBudget</h1>`
    document.body.appendChild(this.element);
  }
}
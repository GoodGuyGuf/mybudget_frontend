export default class Header {
  constructor(){
    this.header = document.createElement('header');
    this.header.innerHTML = '<h1 id="Logo">MyBudget</h1>';
    document.body.appendChild(this.header);
  }
}
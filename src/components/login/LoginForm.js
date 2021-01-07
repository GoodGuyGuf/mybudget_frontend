export default class LoginForm {
  constructor(){
    this.createMainElement();
  }
  
  createMainElement() {
    var mainElement = document.createElement('main');
    document.body.appendChild(mainElement);

    this.createFormElement(mainElement);
    this.insertLinkToSignup(mainElement);
  }

  createFormElement(parentElement) {
    var formElement = document.createElement('form');
    formElement.id = 'loginForm';
    formElement.action = 'http://localhost:3000/users';
    formElement.method = 'POST';

    this.insertFormHeader(formElement);
    this.insertFormInputs(formElement);
    parentElement.appendChild(formElement);
  }

  insertFormInputs(formElement) {
    this.insertUsernameFormInput(formElement);
    this.insertPasswordFormInput(formElement);
    this.insertSubmitFormButton(formElement);
  }

  insertFormHeader(formElement) {
    var container = document.createElement('div');
    container.className = 'loginFlex';
    container.innerHTML = '<h2>Login</h2>';
    formElement.appendChild(container);
  }

  insertUsernameFormInput(formElement) {
    var container = document.createElement('div');
    container.className = 'loginFlex';
    container.innerHTML = `
      <label for='usernameLogin'>Username:</label>
      <input class='loginInput' id='usernameLogin' type='text' name='user[username]' placeholder='Username'>
    `;
    formElement.appendChild(container);
  }

  insertPasswordFormInput(formElement) {
    var container = document.createElement('div');
    container.className = 'loginFlex';
    container.innerHTML = `
      <label for='passwordLogin'>Password:</label>
      <input class='loginInput' id='passwordLogin' type='password' name='user[password]' placeholder='Password'>
    `;
    formElement.appendChild(container);
  }

  insertSubmitFormButton(formElement) {
    var container = document.createElement('div');
    container.className = 'loginFlex';
    container.innerHTML = `
      <input class='loginInput' id='loginSubmit' type='submit' value='Submit'>
    `;
    formElement.appendChild(container);
  }

  insertLinkToSignup(mainElement) {
    var container = document.createElement('section');
    container.className = 'loginFlex';
    container.innerHTML = `
      <h2>Don't Have an Account? <a href="/signup">Sign up</a></h2>
    `;
    mainElement.appendChild(container);
  }
}
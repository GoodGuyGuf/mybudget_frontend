import Header from '../components/Header';
import LoginForm from '../components/login/LoginForm';
export default class Login {
  constructor() {
    this.changeUrl();
    this.buildLoginPage();
  }

  changeUrl() {
    history.replaceState({}, null, '/login');
  }

  buildLoginPage() {
    new Header;
    new LoginForm;
  }

  handleLogin() {
    // handle login fetch
  }
}
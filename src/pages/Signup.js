import Header from '../components/Header';
export default class Signup {
  constructor(){
    this.changeUrl();
    this.buildSignupPage();
  }

  changeUrl() {
    history.pushState({}, null, '/signup');
  }

  buildSignupPage() {
    new Header;
    // new SignupForm;
  }

  handleSignup(){
    // handle login fetch
  }
}
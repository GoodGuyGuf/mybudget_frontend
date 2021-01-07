import Header from '../components/Header';
export default class Home {
  constructor() {
    this.changeUrl();
    this.buildHomePage();
  }

  changeUrl(){
    history.replaceState({}, null, "/");
  }

  buildHomePage() {
    new Header;
  }
}
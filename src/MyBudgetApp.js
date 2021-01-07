import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
export default class MyBudgetApp {
  constructor() {
    this.handleEntryPage();
  }

  handleEntryPage() {
    // what is the value of current user? `String`.
    // If there is no value, it will assign `null` to `currentUser`.
    var currentUser = localStorage.getItem("CurrentUser");
    var url = window.location.pathname;
    // null && true actually returns null instead of true or false.
    // if the currentUser isn't null, bring user to home page.
    if (currentUser != null) {
      new Home;
      // if currentUser isn't null AND the url strictly matches "/", 
      //   bring user to home page.
    } else if (currentUser != null && url === "/") {
      new Home;
      // else, determine which outside entry component to render.
    } else {
      this.determineNonUserEntry(url);
    }
  }

  determineNonUserEntry(url) {
    // if the url matches '/login', start a new Login component
    if (url === '/login') {
      new Login;
      // else if the url matches '/signup', start a new Signup component
    } else if (url === '/signup') {
      new Signup;
      // else, start a new Signup component regardless of what url is entered
    } else {
      new Signup;
    }
  }
}
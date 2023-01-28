// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import WelcomePage from './components/WelcomePage';
// import HomePage from './components/HomePage';

// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={WelcomePage} />
//       <Route path="/home" component={HomePage} />
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import AboutPage from "./components/AboutPage";
import AdsID from "./components/AdsID";
import AdsIDText from "./components/AdsIDText";
import WelcomePage from "./WelcomePage";
// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Switch,
  Router,
} from "react-router-dom";
import textFile from "./textfile.txt";

// function App() {
//     return (
//       <Router>
// <Route exact path="/" component={WelcomePage} />
// <Route path="/privacy-policy" component={PrivacyPolicyPage} />
// <Route path="/about" component={AboutPage} />
//       </Router>
//     );
//   }

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        {/* <Route path="/AboutPage" component={AboutPage} /> */}
        {/* <Route path="/AdsID" component={AdsID} /> */}
        {/* <Route path="/AdsID" component={AdsIDText} /> */}
        <Route path="/app-ads.txt" component={TextFile} />
      </Switch>
    </BrowserRouter>
  );
}

function TextFile() {
    console.log(textFile)
    return <pre> google.com, pub-2227737204422905, DIRECT, f08c47fec0942fa0</pre>;
}

{
  /* <Route path = "/PrivacyPolicyPage"><PrivacyPolicyPage/>
            </Route> */
}
{
  /* <Route path = "/AboutPage"><AboutPage/>
            </Route>
            <Route path = "/"><WelcomePage/>
            </Route> */
}

export default App;

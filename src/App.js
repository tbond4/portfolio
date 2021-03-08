import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav"
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Nav/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/AboutMe" component={AboutMe}/>
    </Switch>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

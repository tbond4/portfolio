import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav"
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Nav/>
    <Route exact Path="/" component={Home}/>
    <Route exact Path="/AboutMe" component={AboutMe}/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;

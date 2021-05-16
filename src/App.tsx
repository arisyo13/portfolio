import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact  key={0} ></Route>
        <Route component={Posts} path='/posts' key={1} ></Route>
        <Route component={Projects} path='/projects' key={2} ></Route>
      </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default App;

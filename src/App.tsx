import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/index";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Post from "./pages/Post";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact  key={0} ></Route>
        <Route component={Post} path='/post' key={1} ></Route>
        <Route component={Projects} path='/projects' key={2} ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact ></Route>
        <Route component={Projects} path='/projects' ></Route>
        <Route component={Post} path='/post' ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

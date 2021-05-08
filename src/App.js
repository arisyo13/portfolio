import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact ></Route>
        <Route component={Projects} path='/projects' ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGa from 'react-ga';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Footer from "./panels/Footer";

const App = () => {
  useEffect(() =>{
    ReactGa.initialize('UA-197778161-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact  key={0} ></Route>
        <Route component={Posts} path='/posts' key={1} ></Route>
        <Route component={Projects} path='/projects' key={2} ></Route>
        <Route component={About} path='/about' key={3} ></Route>
        <Route component={Post} path='/post/:slug' key={4} ></Route>
      </Switch>
    <Footer />
    </BrowserRouter>
  )
}

export default App;

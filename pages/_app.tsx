import React, { useEffect } from "react";
import { AppProps } from "next/app";
import '../src/index.css';
import ReactGa from 'react-ga';
import NavBar from "../src/components/Navbar";
import Footer from '../src/panels/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() =>{
    ReactGa.initialize('UA-197778161-1')
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return ( 
      <React.Fragment>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    )
}

export default MyApp;

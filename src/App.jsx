import React from 'react'
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio";
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App
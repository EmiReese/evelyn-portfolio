import React from 'react'
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio";
import Footer from './components/footer/Footer';
import Header from "./components/header/Header"
const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Portfolio />
    <Footer />
    </>
  )
}

export default App
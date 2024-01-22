import React from 'react'
import './header.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
      <h2>Evelyn Walsh</h2>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/emily-reese-55488629a/"><FaLinkedin /></a>
        <a href="https://github.com/EmiReese"><FaGithub /></a>
      </div>
    </header>
  )
}

export default Header
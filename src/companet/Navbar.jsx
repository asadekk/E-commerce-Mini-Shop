import searchIcon from '../assets/search.svg'

import '../App.css'
import Humburger from './Humburger'
import Modal from './Modal'
function Navbar() {

  return (

    <header>
      <Humburger />
      <h1 className="logo">MINIMAL.</h1>
      <div className="navLinks">
        <a href="#">Barchasi</a>
        <a href="#">Yangi</a>
        <a href="#">Chegirmalar</a>
      </div>
      <div className="navIcons">
         <img src={searchIcon} alt="search" />
         <Modal/>
      </div>
    </header>

  )
}

export default Navbar
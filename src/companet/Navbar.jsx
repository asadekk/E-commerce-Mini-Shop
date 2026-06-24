import React, { useState } from 'react'
import searchIcon from '../assets/search.svg'
import shopIcon from '../assets/shop.svg'
import menuIcon from '../assets/icons8-menu.svg'
import exitGif from '../assets/exit.gif'
// import Modal from './Modal';

import '../App.css'
function Navbar() {
  const [isModal, setIsModal] = useState(false);
  const [isLink, setIsLink] = useState(false)

  const toggelModal = () => { setIsModal(true) }
  const endModal = () => { setIsModal(false) }

  const toggelLink = () => { setIsLink(true) }
  const endLink = () => {setIsLink(false)}

  return (

    <header>
      <img onClick={toggelLink} src={menuIcon} alt="menu" className="burger-menu" />
      {isLink ? <div>
        <div className='ModalLink'>
          <div className='Link-contener'>
            <img
                onClick={endLink}
                src={exitGif}
                width="20px"
                height="20px"
                alt=""
              />
            <a href="#">Barchasi</a>
            <a href="#">Yangi</a>
            <a href="#">Chegirmalar</a>
          </div>
        </div>
      </div> : null}
      <h1 className="logo">MINIMAL.</h1>
      <div className="navLinks">
        <a href="#">Barchasi</a>
        <a href="#">Yangi</a>
        <a href="#">Chegirmalar</a>
      </div>
      <div className="navIcons">
        <img src={searchIcon} alt="search" />
        <img onClick={toggelModal} src={shopIcon} alt="shopIcon" />
        {isModal ?

          <div className="modal">

            <div className="modal-content">

              <img
                onClick={endModal}
                src={exitGif}
                width="20px"
                height="20px"
                alt=""
              />
              <h2>Savat</h2>
              <p>Mahsulotlar shu yerda chiqadi</p>

            </div>

          </div> : null
        }
      </div>
    </header>

  )
}

export default Navbar
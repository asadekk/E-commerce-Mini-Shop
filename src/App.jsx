import React from 'react'
import './App.css'

import searchIcon from './assets/search.svg'
import shopIcon from './assets/shop.svg'
import menuIcon from './assets/icons8-menu.svg'

function App() {
  return (
    <div className='container'>
      <div className='grid-container'>
        <header>
          <img src={menuIcon} alt="menu" className="burger-menu" />
          <h1 className="logo">MINIMAL.</h1>
          <div className="navLinks">
            <a href="#">Barchasi</a>
            <a href="#">Yangi</a>
            <a href="#">Chegirmalar</a>
          </div>
          <div className="navIcons">
            <img src={searchIcon} alt="search" />
            <img src={shopIcon} alt="shop" />
          </div>
        </header>
        <main>
          <hr />
          <div className='mainGuzlik'>
            <h1 className='mainOddiylik'>Oddiylikda Go'zallik</h1>
            <p className='mainText'>Uyingiz va ofisingiz uchun minimalist, zamonaviy va sifatli buyumlar to'plami.</p>
          </div>
          <div className='praduct'>
            <div className='contBtn'>
              <button className='menu'>Uy anjomlari</button>
              <button className='menu'>Barchasi</button>
              <button className='menu'>Osh xona</button>
              <button className='menu'>Dekor</button>
              <button className='menu'>Mebel</button>
              <button className='menu'>Kanselyariya</button>
              <button className='menu'>Aksesuarlar</button>
            </div>
            <div className='praductMenu'>
              <div className='contCord'>
                <div className="cord"></div>
                <div className="cord"></div>
                <div className="cord"></div>
                <div className="cord"></div>
                <div className="cord"></div>
                <div className="cord"></div>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className='footerEnd'>
            <h1>MINIMAL.</h1>
            <p>© 2026 Barcha huquqlar himoyalangan.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
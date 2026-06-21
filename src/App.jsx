import React, { useState } from 'react'
import './App.css'

import searchIcon from './assets/search.svg'
import shopIcon from './assets/shop.svg'
import menuIcon from './assets/icons8-menu.svg'
import PraductCard from './companet/praductCard'

function App() {
  const [ search,setSearch] = useState("")
  console.log(search);
  
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
            <label>
              <input type="text"
              style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} 
                placeholder='Mahsulot nomi'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
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
            <PraductCard />
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
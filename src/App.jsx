import React, { useState } from 'react'
import './App.css'


import PraductCard from './companet/praductCard'
import Navbar from './companet/Navbar'


function App() {
  
  return (
    <div className='container'>
      <div className='grid-container'>
        <Navbar/>
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
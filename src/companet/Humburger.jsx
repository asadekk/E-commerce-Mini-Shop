import React, { useState } from 'react';
import menuIcon from '../assets/icons8-menu.svg';
import exitGif from '../assets/exit.gif';

function Humburger() {
  const [isLink, setIsLink] = useState(false);

  return (
    <>
      <img
        onClick={() => setIsLink(true)}
        src={menuIcon}
        alt="menu"
        className="burger-menu"
      />

      {isLink && (
        <div className="ModalLink">
          <div className="Link-contener">
            <img
              onClick={() => setIsLink(false)}
              src={exitGif}
              width="20"
              height="20"
              alt="close"
            />

            <a href="#">Barchasi</a>
            <a href="#">Yangi</a>
            <a href="#">Chegirmalar</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Humburger;
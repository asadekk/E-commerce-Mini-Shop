import React, { useState } from 'react';
import exitGif from '../assets/exit.gif';
import shopIcon from '../assets/shop.svg';

function Modal() {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <img
        onClick={() => setIsModal(true)}
        src={shopIcon}
        alt="shop"
      />

      {isModal && (
        <div className="modal">
          <div className="modal-content">
            <img
              className="close"
              onClick={() => setIsModal(false)}
              src={exitGif}
              width="20"
              height="20"
              alt="close"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
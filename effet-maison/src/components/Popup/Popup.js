import React from 'react'
import { PopupCont } from './PopupElements'

function Popup({ popupIsActive, popupText }) {
  return (
    <PopupCont isActive={popupIsActive}>
        { popupText }
    </PopupCont>
  )
}

export default Popup
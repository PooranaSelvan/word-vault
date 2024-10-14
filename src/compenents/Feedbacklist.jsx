import React from 'react'
import Card from './Card'
import { FaTimes } from "react-icons/fa";

const Feedbacklist = ({item,onDelete}) => {

    // close button aa click pannum pothu intha func run aagum
    const handleClose = () => {
      onDelete(item.id) // ondelete func ku uuid la generate panna id pass panrom
    }

  return (
    // Message aa display panrathuku card
    <Card changeColor = {true}>
        <div className='text-display'>
            <h3>{item.text}</h3>
            <button className='close' onClick={handleClose}><FaTimes /></button>
        </div>
    </Card>
  )
}

export default Feedbacklist
import React from 'react'
import Feedbacklist from './Feedbacklist'

const Feedbackitem = ({feedback,onDelete}) => {
    
  return (
    <div>
        {
        feedback.map(
            (item) => (
                <Feedbacklist key={item.id} item={item} onDelete={onDelete}></Feedbacklist>
                )
            )
        }
    </div>
  )
}

export default Feedbackitem
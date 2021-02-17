import React from 'react'
import './custom-button.style.scss'
export default function CustomButton({children,...otherprops}) {
    return (
        <div>
          <button className='custom-button' {...otherprops}>
          {children}
         </button>  
        </div>
    )
}

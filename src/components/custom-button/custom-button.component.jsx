import React from 'react'
import './custom-button.style.scss'
export default function CustomButton({children,isGoogleSignIn,inverted,...otherprops}) {
    return (
        <div>
          <button className={
              `${inverted?'inverted' : ''}
              ${isGoogleSignIn?'google-sign-in' : ''} custom-button`} {...otherprops}>
          {children}
         </button>  
        </div>
    )
}

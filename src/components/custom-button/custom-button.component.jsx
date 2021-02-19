import React from 'react'
import './custom-button.style.scss'
export default function CustomButton({children,isGoogleSignIn,...otherprops}) {
    return (
        <div>
          <button className={`${isGoogleSignIn?'google-sign-in' : ''} custom-button`} {...otherprops}>
          {children}
         </button>  
        </div>
    )
}

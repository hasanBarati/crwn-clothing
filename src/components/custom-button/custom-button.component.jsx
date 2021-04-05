import React from 'react'
import './custom-button.style.scss'
import {CustomButtonContainer} from './custom-button.style'
export default function CustomButton({children,...otherprops}) {
    return (
       
          <CustomButtonContainer {...otherprops}>
          {children}
         </CustomButtonContainer>  
        
    )
}

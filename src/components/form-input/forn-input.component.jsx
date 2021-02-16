import React from 'react'
import './form-input.scss'
export default function FormInput({handlechange,label,...otherprops}) {
    return (
        <div className='group'>
            <input className='form-input' onChange={handlechange}  {...otherprops} />
            {
            label?
            (<label className={`${otherprops.value.length ? 'shrink':''}form-input-label`}  >


                        {label}

                </label>)

                :null
        }
        </div>
    )
}

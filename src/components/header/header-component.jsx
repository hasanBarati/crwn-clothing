import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/leaf.svg'
import {auth} from '../../firebase/firebase.utils'
import './header.style.scss'
function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                 <Logo className='logo' />
            </Link>
         <div className="options">
             <Link className="option" to='/shop'>
                 shop
             </Link>
             <Link className="option" to='/contact'>
                 contact
             </Link>
             {
                 currentUser ?
                 <div className="option" onClick={()=>auth.signOut()} >signout</div>
                 :
                <Link className="option" to='/signin'>
                    signin
                </Link>
             }
         </div>
        </div>
    )
}

export default Header

import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/leaf.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.comonent'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import { selectCartHidden} from '../../redux/car/cart.selector'

import CartDropdown from '../cart-dropdown/cart-deopdown.component'
import './header.style.scss'
import {connect} from 'react-redux'
const Header=({currentUser,hidden}) =>{
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
      <CartIcon />
         </div>
         {
             hidden ? null:<CartDropdown />
         }
       
        </div>
    )
}

/*const mapStateToProps=state=>({
    currentUser:state.user.currentUser,
    cart:state.cart.hidden
})*/
/*const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });*/
 /* const mapStateToProps = (state) => ({
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
  });
*/
  const mapStateToProps =createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
  });


export default connect(mapStateToProps)(Header)

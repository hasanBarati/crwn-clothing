import React from 'react'

import {ReactComponent as Logo} from '../../assets/leaf.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.comonent'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selector'
import { selectCartHidden} from '../../redux/car/cart.selector'
import {HederContainer,LogoContainer,OptionConatainer,OptionLink} from './header.style'
import CartDropdown from '../cart-dropdown/cart-deopdown.component'
import './header.style.scss'
import {connect} from 'react-redux'
const Header=({currentUser,hidden}) =>{
    return (
        <HederContainer>
            <LogoContainer to='/'>
                 <Logo className='logo' />
            </LogoContainer>
         <OptionConatainer>
             <OptionLink to='/shop'>
                 shop
             </OptionLink>
             <OptionLink to='/contact'>
                 contact
             </OptionLink>
             {
                 currentUser ?
                 <OptionLink as='div' onClick={()=>auth.signOut()} >signout</OptionLink>
                 :
                <OptionLink to='/signin'>
                    signin
                </OptionLink>
             }
      <CartIcon />
         </OptionConatainer>
         {
             hidden ? null:<CartDropdown />
         }
       
       </HederContainer>
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

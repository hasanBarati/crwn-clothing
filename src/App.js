import React,{useEffect} from 'react'
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header-component'
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'
import {auth,createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import  CheckoutPage from './pages/checkout/checkout.component'
import {selectCollectionForOverview} from './redux/shop/shop.selector'
import {checkUserSession} from './redux/user/user.action'
const  App=({checkUserSession,currentUser})=>{
 
 // unsubscribeFormAuth=null

//   componentDidMount(){
//     const {setCurrentUser, collectionArray}=this.props

//     const {checkUserSession}=this.props
//     checkUserSession()
// //     this.unsubscribeFormAuth=auth.onAuthStateChanged(async userAuth=>{
// //       if(userAuth){
// //           const userRef=await createUserProfileDocument(userAuth)
// //           userRef.onSnapshot(snapshot=>{
// //             setCurrentUser({
             
// //                 id:snapshot.id,
// //                 ...snapshot.data()
              
// //             })
// //           })
// //       }
// //      /* this.setState({currentUser:userAuth})*/
// //     setCurrentUser(userAuth)
// //  addCollectionAndDocuments('collections',collectionArray.map(({title,items})=>({title,items})))
  
// //    } )
  
//   }
useEffect(()=>{
  checkUserSession()
},[checkUserSession])
  // componentWillUnmount(){
  //   this.unsubscribeFormAuth()
  // }

    return (
      <div className="App">
      
        <Header  />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route  path='/shop' component={ShopPage}/>
            <Route exact path='/checkout'  component={ CheckoutPage}/>
            <Route exact path='/signin' 
                render={()=>currentUser ? (<Redirect to='/' />):(<SigninAndSignUpPage />)}
            
            />
        </Switch>
      
      </div>
    );
  }
 

/*const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})*/
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionArray:selectCollectionForOverview
})
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user)),
  checkUserSession:()=>dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

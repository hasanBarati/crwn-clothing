import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header-component'
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
class  App extends React.Component{
 /* constructor(){
    super()

    this.state={
      currentUser:null
    }
  }*/
  unsubscribeFormAuth=null
  componentDidMount(){
    this.unsubscribeFormAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
          const userRef=await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot=>{
            this.props.setCurrentUser({
             
                id:snapshot.id,
                ...snapshot.data()
              
            })
          })
      }
     /* this.setState({currentUser:userAuth})*/
     this.props.setCurrentUser({userAuth})

   } )
  
  }
  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }
  render(){
    return (
      <div className="App">
        <Header  />
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SigninAndSignUpPage}/>
        </Switch>
      
      </div>
    );
  }
 
}
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);

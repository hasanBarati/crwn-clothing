import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header-component'
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
/*
const TopicList=(props)=>{
  console.log(props)
  return(
    <div>
    <h1>TopicList</h1>
  </div>
  )

  }


  const HomePages=(props)=>{
    console.log(props)

    return(
      <div>
      <h1>HomePage</h1>
      <button onClick={()=>props.history.push('/topics')}>topics</button>
    </div>
    )
  
    }

  const TopicDetail=(props)=>{
    console.log(props)
    return(
      <div>
      <h1>TopicDetail {props.match.params.topicid}</h1>
    </div>
    )
  
    }
    */

class  App extends React.Component{
  constructor(){
    super()

    this.state={
      currentUser:null
    }
  }
  unsubscribeFormAuth=null
  componentDidMount(){
    this.unsubscribeFormAuth=auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user)
    //auth.onAuthStateChanged(user=>{this.setState({currentUser:user})
    console.log(user)
   } )
  
  }
  componentWillUnmount(){
    this.unsubscribeFormAuth()
  }
  render(){
    return (
      <div className="App">
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SigninAndSignUpPage}/>
        </Switch>
      
      </div>
    );
  }
 
}

export default App;

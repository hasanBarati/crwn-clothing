import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/hompage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header-component'
import SigninAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'
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

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/sigin' component={SigninAndSignUpPage}/>
      </Switch>
    
    </div>
  );
}

export default App;

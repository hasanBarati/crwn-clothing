import React from 'react'
import {Route,Link} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/hompage.component'
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
   const HatsPage=(props)=>{
    
    return(
      <div>
      <h1>HatsPage</h1>
    </div>
    )
  
    }
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;

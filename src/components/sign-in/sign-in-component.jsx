import React, { Component } from 'react'
import './sign-in.style.scss'
import  FormInput from '../form-input/forn-input.component'
export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handlesubmit=e=>{
        e.preventDefault()
        this.setState({email:'', password:''})
    } 
    handlechange=e=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    } 
    render() {
        return (
            <div className="sign-in">
                <h2>i already have account</h2>
                <span>signin with your email</span>
                <form onSubmit={this.handlesubmit}>
                    < FormInput name='email'
                     type='email'
                      value={this.state.email} 
                      label='email'
                      handlechange={this.handlechange}
                      />
                
                    < FormInput 
                    name='password' 
                    type='password'
                     value={this.state.password}
                     handlechange={this.handlechange}
                     label='password'
                     />
                   
                    <input type="submit" value="submit form" />
                </form>
            </div>
        )
    }
}

export default SignIn

import React, { Component } from 'react'
import './sign-in.style.scss'
import  FormInput from '../form-input/forn-input.component'
import {connect} from 'react-redux'
import CustomButton from '../../components/custom-button/custom-button.component'
import {signInWithGoogle,auth} from '../../firebase/firebase.utils'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'
export class SignIn extends  Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handlesubmit=async e=>{
        e.preventDefault()
        const {emailSignInStart}=this.props
        const {email,password}=this.state
   
        emailSignInStart(email,password)
        // try{
        //         await auth.signInWithEmailAndPassword(email,password)
        //         this.setState({email:'', password:''})
        // }
        // catch(error){
        //     console.log(error)
        // }
        
    } 
    handlechange=e=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    } 
    render() {
       const {googleSignInStart}=this.props
        return (
            <div className="sign-in">
                <h2>i already have account</h2>
                <span>signin with your email</span>
                <form onSubmit={this.handlesubmit}>
                    <FormInput name='email'
                     type='email'
                      value={this.state.email} 
                      label='email'
                      handlechange={this.handlechange}
                      />
                
                    <FormInput 
                    name='password' 
                    type='password'
                     value={this.state.password}
                     handlechange={this.handlechange}
                     label='password'
                     />
                   <div className="buttons">
                     <CustomButton type="submit"  >   sign in </CustomButton>
                     <CustomButton onClick={googleSignInStart}  isGoogleSignIn>  {' '} sign in with google{' '}</CustomButton>

                   </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)

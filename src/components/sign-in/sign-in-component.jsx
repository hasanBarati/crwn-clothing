import React, { useState } from 'react'
import './sign-in.style.scss'
import  FormInput from '../form-input/forn-input.component'
import {connect} from 'react-redux'
import CustomButton from '../../components/custom-button/custom-button.component'
import {signInWithGoogle,auth} from '../../firebase/firebase.utils'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'
const  SignIn=({emailSignInStart,googleSignInStart})=>  {
   const [usercredintial,setcredintial]=useState({email:'',password:''})
   const {email,password}=usercredintial
 const   handlesubmit=async e=>{
        e.preventDefault()
       
  
   
        emailSignInStart(email,password)
        // try{
        //         await auth.signInWithEmailAndPassword(email,password)
        //         this.setState({email:'', password:''})
        // }
        // catch(error){
        //     console.log(error)
        // }
        
    } 
   const handlechange=e=>{
        const {value,name}=e.target
        setcredintial({...usercredintial,[name]:value})
    } 
  
        return (
            <div className="sign-in">
                <h2>i already have account</h2>
                <span>signin with your email</span>
                <form onSubmit={handlesubmit}>
                    <FormInput name='email'
                     type='email'
                      value={email} 
                      label='email'
                      handlechange={handlechange}
                      />
                
                    <FormInput 
                    name='password' 
                    type='password'
                     value={password}
                     handlechange={handlechange}
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
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)

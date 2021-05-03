import React, {useState } from 'react'
import './signup.style.scss'
import FormInput from '../form-input/forn-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
const SignUp=()=> {
    const [usercredintial,setcredintial]=useState({email:'',password:'',confirmPassword:'',displayName:''})
    const {displayName,email,password,confirmPassword}=usercredintial

    // constructor(){
    //     super()
    //     this.state={
    //         displayName:'',
    //         email:'',
    //         password:'',
    //         confirmPassword:''
    //     }
    // }
  const  handleSubmit=async event=>{
        event.preventDefault()
      
        if(password != confirmPassword){
            alert('password dont match')
            return;
        }
        try{
                const {user}=await auth.createUserWithEmailAndPassword(
                    email,
                    password
                )
             await   createUserProfileDocument(user,{displayName})
             setcredintial({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
             })
        }
        catch(error){
            console.log(error)
        }
    }
   const  handleChange=event=>{
        const {name,value}=event.target
        setcredintial({...usercredintial,[name]:value})
    }

      
        return (
            <div className='sign-up'>
                <h2 className='title'>i dont have an account</h2>
                <span>sign up with email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                   <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='email'
                    />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='password'
                    />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='confirmPassword'
                    />
                    <CustomButton type='submit'>sinup</CustomButton>
                </form>
            </div>
        )
    
}

export default SignUp

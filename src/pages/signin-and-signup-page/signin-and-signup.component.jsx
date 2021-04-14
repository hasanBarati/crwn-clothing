import React from 'react'
import SignIn from '../../components/sign-in/sign-in-component'
import SignUp from '../../components/signup/SignUp.component'
import './signin-and-signup.style.scss'
function SigninAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SigninAndSignUpPage

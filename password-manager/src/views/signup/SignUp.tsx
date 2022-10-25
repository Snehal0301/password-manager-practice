import React from 'react'
import Form from '../../components/form/Form'
import './signup.css'

const SignUp = () => {
  return (
    <>
      <div className='login-container'>
        <div className="signUpLogo">
          <div className="signUpLogo-header">
            <img src={require("../../assets/images/logo.png")} alt="Logo" />
            <h2>Protect & Manage every
              password in your business </h2>
          </div>
          <div className="signUpLogo-mobile">
            <img src={require("../../assets/images/mobile_logo.png")} alt="" className='mobile_logo' />
          </div>
        </div>
        <div className="signUpContent">
          <Form type="signup" />
        </div>
      </div>
    </>
  )
}

export default SignUp
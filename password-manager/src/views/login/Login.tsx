import React, { useState, useEffect } from 'react'
import Form from '../../components/form/Form'
import Toast from '../../components/toast/Toast'
import { Link } from 'react-router-dom'
import './login.css'
const Login = () => {

    const [login, setLogin] = useState(true)
    const [signup, setSignUp] = useState(false)
    const [orangeLine1, setOrangeLine1] = useState(true)
    const [orangeLine2, setOrangeLine2] = useState(false)
    const [showNoAccountPara, setshowNoAccountPara] = useState(true)
    const toggleLogin = () => {
        setLogin(true)
        setSignUp(false)
        setOrangeLine1(true)
        setOrangeLine2(false)
    }
    const toggleSignUp = () => {
        setLogin(false)
        setSignUp(true)
        setOrangeLine1(false)
        setOrangeLine2(true)
        setshowNoAccountPara(false)
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <div className="signInLogo">
                    <div className="signinLogo-header">
                        <img src={require("../../assets/images/logo.png")} alt="Logo" className='desktop-logo' />
                        <h2>Protect & Manage every
                            password in your business </h2>
                    </div>
                    <div className="signInLogo-mobile">
                        <img src={require("../../assets/images/mobile_logo.png")} alt="" className='mobile_logo' />
                    </div>
                </div>
                <div className="signInContent">
                    <div className="tabs">
                        <div className="signin" onClick={toggleLogin}>
                            {/* <Link to="/login" className='link'> SIGN IN</Link> */}
                            SIGN IN
                            {
                                orangeLine1 &&
                                <div className="orange-line"></div>
                            }
                        </div>
                        <div className="signup" onClick={toggleSignUp}>
                            SIGN UP
                            {
                                orangeLine2 &&
                                <div className="orange-line"></div>
                            }
                        </div>
                    </div>
                    {
                        login ?
                            <Form type="signin" />
                            :
                            <Form type="signup" />
                    }
                    {
                        showNoAccountPara &&

                        <p className='no-account'>Don’t have a Account? <span className='signin-link' onClick={toggleSignUp} >SIGN UP</span> </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
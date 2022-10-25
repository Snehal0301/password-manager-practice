import React, { useState, useEffect } from 'react'
import './form.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
const Form = ({ type }: any) => {
    const [data, setData]: any = useState({
        mobileNo: "",
        newMPin: "",
        confirmMPin: ""
    })

    const [records, setRecords]: any = useState([]);

    const handleForm = (e: any) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value })
        let recordList = JSON.parse(localStorage.getItem("signup") || "[]")
        recordList.push(data)
        localStorage.setItem("signup", JSON.stringify(recordList))

        setData({
            mobileNo: "",
            newMPin: "",
            confirmMPin: ""
        })
    }

    let name, value;
    const handleChange = (e: any) => {
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value })
    }

    return (
        <div className='FormBox'>
            {
                type === 'signup' ?
                    <>
                        <form onSubmit={handleForm}>
                            <h1 className='signupTitle'>SIGN UP</h1>
                            <input type="text" placeholder="Enter Mobile Number" className='passwordInput' name='mobileNo' value={data.mobileNo} onChange={handleChange} required/>
                            <input type="number" placeholder="Enter 4 Digit MPin" className='passwordInput' name='newMPin' value={data.newMPin} onChange={handleChange} required/>
                            <div className="passwordInputBox">
                                <input type="number" placeholder="Re-Enter 4 Digit MPin" className='passwordInput' name='confirmMPin' value={data.confirmMPin} onChange={handleChange} required/>
                                <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' id='togglepass' />
                            </div>
                            <div className="signup">
                                {/* <Button text="SIGN UP" class_name="signUpBtn" /> */}
                                <button className='signUpBtn'>SIGN UP</button>
                            </div>
                        </form>
                    </>
                    :
                    <>
                        <form >
                            <h1 className='signinTitle'>SIGN IN TO YOUR ACCOUNT</h1>
                            <input type="text" placeholder='Mobile Number' className='passwordInput' name='mobileNo' />
                            <div className="passwordInputBox">
                                <input type="number" placeholder="Re-Enter 4 Digit MPin" className='passwordInput' name='mPin' />
                                <img src={require("../../assets/images/eye_on.png")} alt="Password" className='togglePassword' id='togglepass' />
                            </div>
                            <p className='forgotPass'>Forgot your password?</p>
                            {/* <Button text="SIGN IN" class_name="signInBtn" /> */}
                            <button className='signInBtn'>SIGN IN</button>
                            {/* <p className='signUp'>Don’t have a Account? <span className='signin-link' >SIGN UP</span> </p> */}
                        </form>
                    </>
            }
        </div>
    )
}

export default Form
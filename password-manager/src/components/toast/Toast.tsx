import React from 'react'
import './toast.css'

const Toast = ({ type, message }: any) => {
    return (
        <div className={`alert alert-${type} toast`} role="alert">
            {message}
            <i className="fa-solid fa-xmark"></i>
        </div>
    )
}

export default Toast
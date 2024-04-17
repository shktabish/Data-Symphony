import React, { useState } from 'react'
import { LuUser2 } from "react-icons/lu"
import { MdOutlineLock } from "react-icons/md"
import google from '/images/google.png'
import bgImg from '/images/login-bg.png'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) => {
        e.prevent.default()
    }

    return (
        <div className='login'>
            <div className="loginCon">
                <h2 style={{color:"#22274F"}}>Welcome</h2>
                <form onSubmit={(e) => handleSubmit(e)} style={{width:"100%"}} className='loginForm'>
                    <div className='username'>
                        <LuUser2 style={{scale:"1.5"}}/>
                        <input
                            type="text"
                            id='username'
                            value={username}
                            placeholder='Username'
                            onChange={(e) => (setUsername(e.target.value))} />
                    </div>
                    <div className='password'>
                        <MdOutlineLock style={{scale:"1.5"}}/>
                        <input
                            type="password"
                            id='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => (setpassword(e.target.value))} />
                    </div>
                    <button className='idBtn'><Link to={"/profile"}>Login</Link></button>
                </form>
                <p style={{marginTop:"20px"}}><span style={{fontWeight:700}}>Login</span> with others</p>
                <div className="googleLogin">
                    <img src={google} style={{height:"30px", width:"30px"}}/>
                    <p>Login with <span style={{fontWeight:700}}>Google</span></p>
                </div>
            </div>
            <div className="sideCon">
                <img src={bgImg} className='bgImg' />
            </div>
        </div>
    )
}

export default Login
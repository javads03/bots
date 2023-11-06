import React,{useState} from "react";

export const Login= (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email"><b>Username</b></label>
            <input value={email} onChange={(e)  => setEmail(e.target.value)} type="email" placeholder="email" id="email" name="email"/>

            <label htmlFor="password"><b>Password</b></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>

            <button type="submit">Login</button>
        </form>
        <label ><b>Don't have an account? </b>Register</label>
        <button className="link-bio" onClick={()=>props.onFormSwitch('register')}> Register</button>
        </div>
    )
}
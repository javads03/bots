import React,{useState} from "react";

export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label><b>Full Name</b></label>
            <input type="text" value={name} name="name" id="name" placeholder="full name" />
            <label htmlFor="email"><b>Username</b></label>
            <input value={email} onChange={(e)  => setEmail(e.target.value)} type="email" placeholder="email" id="email" name="email"/>

            <label htmlFor="password"><b>Password</b></label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>

            <button type="submit">Register</button>
        </form>

        <label><b>Already have an account?</b> Login</label>
        <button className="link-bio" onClick={()=>props.onFormSwitch('login')}>Login </button>
        </div>
    )
}
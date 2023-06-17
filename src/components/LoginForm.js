import { useState } from "react"
import React from "react";
import axios from 'axios';
const LoginForm=()=>{
    const [userName,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const authObject={'Project-ID':"d8b67d0a-610c-4dd7-a585-9795cd6057fb",'User-Name':userName,'User-Secret':password}
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            localStorage.setItem('userName',userName);
            localStorage.setItem('password',password);
            console.log(userName,password)
            window.location.reload();
        }catch(error){
            setError('Oops, incorrect credentials!');
        }


    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="userName" required/>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                    <div align="center">
                        <button type="submit" className="button"><span>Start Chatting</span></button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;
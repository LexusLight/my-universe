import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import style from './../Profile.module.css'

const Auth = () => {
    let [username,setUsername] = useState("username");
    let [password,setPassword] = useState("password");
    let [message,setMessage] = useState("");

    const authUser = async(event:any) => {
        event.preventDefault();
        const body = {
            username: username,
            password: password,
        }

        const response = await fetch('http://localhost:1337/api/auth', {
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body),
        });
        const status = response.status;

        if(status != 401) {
            const text = "Вы авторизованы."
            setMessage(text);
            const token = await response.json();
            localStorage.setItem("universe_token",token.token);
        }else{
            const text = await response.text();
            setMessage(text);
        }
    }

    const usernameHandler = (event:any) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event:any) => {
        setPassword(event.target.value);
    }



    return (
        <div className={style.center}>
            <div>Авторизация</div>
            <br/>
            <form onSubmit={authUser}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={username} onChange={usernameHandler}/>
                <br/>
                <input type="password" value={password} onChange={passwordHandler}/>
                <br/>
                <button> Авторизация </button>
            </form>
        </div>
    );
}

export default Auth;
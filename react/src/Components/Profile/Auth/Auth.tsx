import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import style from './../Profile.module.css'

const Auth = () => {
    let [username,setUsername] = useState("username");
    let [password,setPassword] = useState("password");
    let [message,setMessage] = useState("");

    const addPerson = async(event:any) => {
        event.preventDefault();
        let body = {
            username: username,
            password: password,
        }

        let response = await fetch('http://localhost:1337/auth', {
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body),
        });
        let status = response.status;
        let text = (status == 401) ? await response.text(): "Вы авторизованы.";
        setMessage(text);
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
            <form onSubmit={addPerson}>
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
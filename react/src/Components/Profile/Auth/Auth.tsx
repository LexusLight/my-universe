import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import style from './../Profile.module.css'
import axios from 'axios'

const Auth = () => {
    let [username,setUsername] = useState("username");
    let [password,setPassword] = useState("password");
    let [message,setMessage] = useState("");

    const authUser = async(event:any) => {
        event.preventDefault();
        let data = new FormData();
        data.append('password',password);
        data.append('username',username);

        let response:any;
        let status:number;

        try{
            response = await axios.post('http://localhost:1337/api/auth', data);
            status = response.status;
        }catch(error){
            status = error.response.status;
            response = error.response;
        }

        if(status != 401) {
            const text = "Вы авторизованы.";
            setMessage(text);
            const token = await response.data.token;
            localStorage.setItem("universe_token",token);
        }else{
            const text = await response.data;
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
import React from 'react';
import {useState} from 'react'
import style from './../Profile.module.css'

const Reg = () => {
    let [username,setUsername] = useState("username");
    let [email,setEmail] = useState("email");
    let [password,setPassword] = useState("password");
    let [message,setMessage] = useState("");

    const addPerson = async(event:any) => {
        event.preventDefault();
        let body = {
            username: username,
            email: email,
            password: password,
        }

        let response = await fetch('http://localhost:1337/api/reg', {
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body),
        });
        let text = await response.text();
        setMessage(text);
    }

    const usernameHandler = (event:any) => {
        setUsername(event.target.value);
    }
    const emailHandler = (event:any) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event:any) => {
        setPassword(event.target.value);
    }



    return (
        <div className={style.center}>
            <div>Регистрация</div>
            <br/>
            <form onSubmit={addPerson}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={username} onChange={usernameHandler}/>
                <br/>
                <input type="file"/>
                <br/>
                <input type="email" value={email} onChange={emailHandler}/>
                <br/>
                <input type="password" value={password} onChange={passwordHandler}/>
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default Reg;
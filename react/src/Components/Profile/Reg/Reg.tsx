import React from 'react';
import {useState} from 'react'
import style from './../Profile.module.css'

const Reg = () => {
    let [username,setUsername] = useState("username");
    let [email,setEmail] = useState("email");
    let [password,setPassword] = useState("password");
    // let [file,setFile] = useState();
    let [message,setMessage] = useState("");

    const addPerson = async(event:any) => {
        event.preventDefault();
        const body = {
            username: username,
            password: password,
            email: email
        }

        const response = await fetch('http://localhost:1337/api/reg', {
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
    // const imageHandler = (event:any) => {
    //     setFile(event.target.files[0]);
    // }



    return (
        <div className={style.center}>
            <div>Регистрация</div>
            <br/>
            <form onSubmit={addPerson}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={username} onChange={usernameHandler}/>
                <br/>
                <input type="file" onChange={()=>{}} />
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
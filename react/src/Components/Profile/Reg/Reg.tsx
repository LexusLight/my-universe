import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import style from './../Profile.module.css'

const Reg = () => {
    let [username,setUsername] = useState("username");
    let [email,setEmail] = useState("email");
    let [password,setPassword] = useState("password");
    let [password2,setPassword2] = useState("password");
    let [image,setImage] = useState('');
    let [message,setMessage] = useState("");

    const addPerson = async(event:any) => {
        event.preventDefault();
        let text = "Пароли не совпадают"
        if(password === password2){
            let data = new FormData();
            data.append('username',username);
            data.append('email',email);
            data.append('password',password);
            data.append('image',image,uuidv4()+'.png');
            try{
                const  response = await axios.post('http://localhost:1337/api/reg',data);
                text = response.data;
            }catch(error) {
                text = error.response.data;
            }
        }
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
    const password2Handler = (event:any) => {
        setPassword2(event.target.value);
    }
    const imageHandler = (event:any) => {
        setImage(event.target.files[0]);
    }

    return (
        <div className={style.center}>
            <div>Регистрация</div>
            <br/>
            <form onSubmit={addPerson}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={username} onChange={usernameHandler} required/>
                <br/>
                <input type="file" onChange={imageHandler} required/>
                <br/>
                <input type="email" value={email} onChange={emailHandler} required/>
                <br/>
                <input type="password" value={password} onChange={passwordHandler} required/>
                <br/>
                <input type="password" value={password2} onChange={password2Handler} required/>
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default Reg;
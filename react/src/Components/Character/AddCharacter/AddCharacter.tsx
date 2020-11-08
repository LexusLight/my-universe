import React, {useState} from 'react';
import style from './AddCharacter.module.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const AddCharacter = () => {
    let [message,setMessage] = useState("");
    let [name,setName] = useState("Jessy");
    let [about,setAbout] = useState("about...");
    let [image,setImage] = useState('');

    const addCharacter = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        token = (token == null) ? 'nothing': token;
        let data = new FormData();
        data.append('name',name);
        data.append('about',about);
        data.append('token',token);
        data.append('image',image,uuidv4()+'.png');

        const response = await axios.post('http://localhost:1337/api/add_character', data);
        const text = await response.data;
        setMessage(text);
    }

    const nameHandler = (event:any) => {
        setName(event.target.value);
    }
    const aboutHandler = (event:any) => {
        setAbout(event.target.value);
    }
    const imageHandler = (event:any) => {
        setImage(event.target.files[0]);
    }

    return (
        <div className={style.center}>
            <div>Добавление персонажа</div>
            <br/>
            <form onSubmit={addCharacter}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={name} onChange={nameHandler} required/>
                <br/>
                <input type="file" onChange={imageHandler} required/>
                <br/>
                <textarea onChange={aboutHandler} required/>
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default AddCharacter;
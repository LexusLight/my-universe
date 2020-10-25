import React, {useState} from 'react';
import style from './AddCharacter.module.css'
import axios from 'axios'

const AddCharacter = () => {
    let [message,setMessage] = useState("");
    let [name,setName] = useState("Jessy");
    let [about,setAbout] = useState("about...");

    const addCharacter = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        token = (token == null) ? 'nothing': token;
        let data = new FormData();
        data.append('name',name);
        data.append('about',about);
        data.append('token',token);

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

    return (
        <div className={style.center}>
            <div>Добавление персонажа</div>
            <br/>
            <form onSubmit={addCharacter}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={name} onChange={nameHandler}/>
                <br/>
                <textarea onChange={aboutHandler}/>
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default AddCharacter;
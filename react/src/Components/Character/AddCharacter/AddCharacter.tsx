import React, {useState} from 'react';
import style from './AddCharacter.module.css'

const AddCharacter = () => {
    let [message,setMessage] = useState("");
    let [name,setName] = useState("Jessy");
    let [about,setAbout] = useState("about...");

    const addCharacter = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        let body = {
            name: name,
            about: about,
            token: token,
        };

        let response = await fetch('http://localhost:1337/api/add_character', {
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body),
        });
        let text = await response.text();
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
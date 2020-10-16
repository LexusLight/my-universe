import React, {useState} from 'react';
import style from './AddCharacter.module.css'

const AddCharacter = () => {
    let [message,setMessage] = useState("");
    let [name,setName] = useState("Jessy");

    const addPerson = async(event:any) => {
        event.preventDefault();
        let body = {
            username: name,
        }

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

    return (
        <div className={style.center}>
            <div>Регистрация</div>
            <br/>
            <form onSubmit={addPerson}>
                <div color={"red"}>{message}</div>
                <br/>
                <input type="text" value={name} onChange={nameHandler}/>
                <br/>
                <input type="file"/>
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default AddCharacter;
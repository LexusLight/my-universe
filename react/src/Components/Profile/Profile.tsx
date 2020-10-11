import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import {BrowserRouter, Route} from 'react-router-dom'
import style from './Profile.module.css'

const Profile = () => {
    let [name,setName] = useState("noname");
    let [about,setAbout] = useState("about");

    const addPerson = async(event:any) => {
        event.preventDefault();
        let response = await fetch('http://localhost:1337/proverka', {
            headers: {'Content-Type':'application/json'},
            mode: 'cors',
            method: 'GET',
        });

        let json = await response.json();
        console.log(json);
    }

    const nameHandler = (event:any) => {
        setName(event.target.value);
    }

    const aboutHandler = (event:any) => {
        setAbout(event.target.value);
    }


    return (
        <div className={style.center}>
            <div>Тут страница профиля</div>
            <br/>
            <form onSubmit={addPerson}>
                <input type="text" value={name} onChange={nameHandler}/>
                <br/>
                {/*<input type="file"/>*/}
                <br/>
                <textarea value={about} onChange={aboutHandler} />
                <br/>
                <button> Отправить </button>
            </form>
        </div>
    );
}

export default Profile;
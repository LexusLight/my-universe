import React from 'react';
import {useState} from 'react'
import style from './../Profile.module.css'
import {observer} from 'mobx-react'

interface props{
    store:any,
}

const Test = observer((props:props) => {
    let[characters,setCharacters] = useState<any[]>([]);

    const uploadCharacters = async() => {
        setCharacters(await props.store.getCharacters());
        // characters.map((el)=>{return(<div>el</div>)});
    }

    const rendCards = () => {
        return(characters.map((el)=>{
            return(
                <div>
                    <div>{el.name}</div>
                    <img src={'127.0.0.1:1337/api/character_avatar?id='+el.id} />
                    <br/>
                </div>
            )
        }));
    }

    return(
        <div>
            <button onClick={uploadCharacters}>Load characters</button>
            {rendCards()}
        </div>
    );

})

export  default  Test
import React from 'react';
import {useState} from 'react'
import style from './../Profile.module.css'
import {observer} from 'mobx-react'

interface props{
    store:any,
}

const Test = observer((props:props) => {
    let[characters,setCharacters] = useState([]);

    const rendCharacters = async() => {
        setCharacters(await props.store.getCharacters());
        let block = characters.map((el)=>{return(<div>el</div>)})
    }

    return(
        <div>
            <button onClick={rendCharacters}>Load characters</button>
            {characters}
        </div>
    );

})

export  default  Test
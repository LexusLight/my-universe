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
        return(characters.map((el,index)=>{
            return(
                <div key={index}>
                    <div>{el.name}</div>
                    <img src={'https://127.0.0.1:1337'+el.img_url} alt={'Картинка'} />
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
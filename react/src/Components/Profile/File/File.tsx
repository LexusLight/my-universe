import React from 'react';
import {useState} from 'react'
import style from './../Profile.module.css'
import axios from 'axios'

const File = () => {

    let [file,setFile] = useState('');
    let [filename,setFilename] = useState('Choose file');
    let [uploadedFile, setUploadedFile] = useState({});
    let [message,setMessage] = useState("");

    const sendFile = async(event:any) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file',file);

        try{
            const response = await axios.post('http://localhost:1337/api/file',
                formData, {
                headers: {
                        'Content-Type': 'multipart/form-data'
                },
            });

            const {filename, filePath} = response.data;
            setUploadedFile({filename, filePath});
        }catch(error){
            if(error.response.status == 500) {
                setMessage("Проблема на сервере");
            }else {
                setMessage(error.response.data.msg);
            }
        }
        // setMessage(text);
    }

    const fileHandler = (event:any) => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].filename);
    }


    return (
        <div className={style.center}>
            <div>Регистрация</div>
            <br/>
            <form onSubmit={sendFile}>
                <div color={"red"}>{message}</div>
                <br/>
                {filename}
                <br/>
                <input type="file" onChange={fileHandler} />
                <br/>
                <button> Отправить </button>
            </form>
            {JSON.stringify(uploadedFile)}
        </div>
    );
}

export default File;
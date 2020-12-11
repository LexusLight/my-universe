import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
//import style from './../Profile.module.css'
import {Box, Button, TextField, makeStyles} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";


const useStyles = makeStyles({
    avtarCircle:{
        height:100,
        width:100,
        //marginTop:10,
        borderRadius:50,
    },
    formInput:{
        width: '51%',
        maxWidth: 400,
    },
})

const Reg = () => {
    const styles = useStyles();
    let [username,setUsername] = useState("");
    let [email,setEmail] = useState(" ");
    let [password,setPassword] = useState("");
    let [password2,setPassword2] = useState("");
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
        <div>
            <Box>Регистрация</Box>
            <br/>
            <form onSubmit={addPerson}>
                <div color={"red"}>{message}</div>
                <Box>
                    <input
                        id="avatar-input"
                        accept="image/*"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={imageHandler}
                    />
                    <label htmlFor="avatar-input" >
                        <Button color="default" className={styles.avtarCircle}
                                variant="contained"
                                component="span">
                            <PhotoCamera  />
                        </Button>
                    </label>
                </Box>
                <br/>
                <TextField className={styles.formInput} type="text" variant="filled" label="@username" value={username} onChange={usernameHandler} required/>
                <br/>
                <TextField className={styles.formInput} type="email" variant="filled" label="email" value={email} onChange={emailHandler} required/>
                <br/>
                <TextField className={styles.formInput} type="password" variant="filled" label="password" value={password} onChange={passwordHandler} required/>
                <br/>
                <TextField className={styles.formInput} type="password" variant="filled" label="password"value={password2} onChange={password2Handler} required/>
                <br/>
                <Button color="primary" variant="outlined"> Отправить </Button>
            </form>
        </div>
    );
}

export default Reg;
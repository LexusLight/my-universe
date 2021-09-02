import React, {useState} from 'react';
import style from './AddCharacter.module.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {charStyles} from "../../Style/Styles";
import {Box, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";

const AddCharacter = () => {
    const styles = charStyles();

    let [message,setMessage] = useState("");

    let [name,setName] = useState("Jess"); //Краткое имя, показывающееся в списке
    let [avatar,setAvatar] = useState(''); //Аватарка-кружочек, показывающийся в списке
    let [sex, setSex] = useState("Sex"); //Пол, показывающийся в списке

    let [fullName,setFullName] = useState("Jessy Lorem Ipsum"); //Полное имя персонажа
    let [about,setAbout] = useState("About..."); //Описание и история персонажа
    let [likes, setLikes] = useState({}); //Список того, что любит персонаж
    let [dislikes, setDislikes] = useState({}); //Список того, что не любит персонаж
    let [image,setImage] = useState('');//Изображение-портрет персонажа
    let [reference,setReference] = useState('');//Изображение-референс

    const addCharacter = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        token = (token == null) ? 'nothing': token;
        let data = new FormData();
        data.append('name',name);
        data.append('about',about);
        data.append('token',token);
        data.append('image',image,uuidv4()+'.png');
        let text:string;
        try{
            const response = await axios.post('http://localhost:1337/api/add_character', data);
            text = await response.data;
        }catch(error){
            text = await error.response.data;
        }
        setMessage(text);
    }

    const nameHandler = (event:any) => {
        setName(event.target.value);
    }
    const avatarHandler = (event:any) => {
        setImage(event.target.files[0]);
    }
    const sexHandler = (event:any) => {
        setImage(event.target.value);
    }

    const fullNameHandler = (event:any) => {
        setFullName(event.target.value);
    }
    const aboutHandler = (event:any) => {
        setAbout(event.target.value);
    }
    const imageHandler = (event:any) => {
        setImage(event.target.files[0]);
    }
    const referenceHandler = (event:any) => {
        setImage(event.target.files[0]);
    }
    const likesHandler = (event:any) => {
        setLikes(event.target.value);
    }
    const dislikesHandler = (event:any) => {
        setDislikes(event.target.value);
    }


    return (
        <Paper>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant={"h5"}>Add character</Typography>
                    <br/>
                    <form onSubmit={addCharacter}>
                        <div color={"red"}>{message}</div>
                        <br/>
                        <Box mb={2}>
                            Имя:
                            <TextField className={styles.formInput} type="text" value={name} onChange={nameHandler} required/>
                        </Box>
                        <Box mb={2}>
                            Аватарка:
                            <input type="file" onChange={avatarHandler} required/>
                        </Box>
                        <Box mb={2}>
                            Пол:
                            <TextField className={styles.formInput} type="text" onChange={sexHandler}/>
                        </Box>

                        <Box mb={2}>
                            Полное имя:
                            <TextField className={styles.formInput} type="text" value={fullName} onChange={fullNameHandler}/>
                        </Box>
                        <Box mb={2}>
                            Портрет:
                            <input type="file" onChange={imageHandler} required/>
                        </Box>
                        <Box mb={2}>
                            Референс:
                            <input type="file" onChange={referenceHandler} required/>
                        </Box>
                        <Box mb={2}>
                            Любит:
                            <TextField className={styles.formInput} type="text" onChange={likesHandler}/>
                        </Box>
                        <Box mb={2}>
                            Не любит:
                            <TextField className={styles.formInput} type="text" onChange={dislikesHandler}/>
                        </Box>
                        <Box mb={2}>
                            Описание:
                            <TextField className={styles.formInput} onChange={aboutHandler} required/>
                        </Box>
                        <Button color="secondary" variant="outlined" type="submit"> Submit </Button>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddCharacter;
import React, {useState} from 'react';
import style from './AddCharacter.module.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {artStyles} from "../../Style/Styles";
import {useHistory} from 'react-router-dom'
import userStore from "../../../Stores/UserStore";

import {Box, Button, Grid, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import {AccountBox, AccountCircle, Attachment, Brush, CheckBox, PhotoCamera, Publish} from "@material-ui/icons";

//Форма слишком большая, раскидать на компоненты


const AddArt = () => {
    const styles = artStyles();
    const history = useHistory();

    let [message,setMessage] = useState("");
    let [name,setName] = useState(""); //
    let [image,setImage] = useState(''); //
    let [image_url,setImageURL] = useState(''); //
    let [about,setAbout] = useState("About..."); //

    const addArt = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        token = (token == null) ? 'nothing': token;
        let data = new FormData();
        data.append('name',name);
        data.append('image',image,uuidv4()+'.png');
        data.append('about',about);
        data.append('token',token);
        let text:string;
        try{
            const response = await axios.post('http://localhost:1337/api/add_art', data);
            text = await response.data;
            history.push(`./page/${userStore.username}`);
        }catch(error){
            text = await JSON.stringify(error.response.data);
        }
        setMessage(text);

    }
    const imageHandler = (event:any) => {
        setImage(event.target.files[0]);
        let image_path = URL.createObjectURL(event.target.files[0]);
        setImageURL(image_path);
    }
    const nameHandler = (event:any) => {
        setName(event.target.value);
    }
    const aboutHandler = (event:any) => {
        setAbout(event.target.value);
    }

    return (
        <Paper>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography variant={"h4"}>Add Art</Typography>
                    <br/>
                    <form onSubmit={addArt}>
                        <div color={"red"}>{message}</div>
                        <Typography variant={"h6"}>Art Title</Typography>
                        <hr/>
                        <Box mb={2}>
                            <input
                                id="image-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                type="file"
                                onChange={imageHandler}
                            />
                            <label htmlFor="image-input" className={styles.imageArt}>
                                <Button color="default"
                                        variant="contained"
                                        component="span"
                                        className={styles.imageArt}
                                        style={{
                                            backgroundImage:`url(${image_url})`,
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center"
                                        }}>
                                    {!(image_url != '') &&<Attachment className={styles.picIcon}/>}
                                </Button>
                            </label>
                        </Box>
                        <hr/>
                        <Typography variant={"h6"}>Art Title</Typography>
                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} type="text" label={"Name"} value={name} onChange={nameHandler} required/>
                        </Box>
                        <hr/>
                        <Typography variant={"h6"}>About</Typography>
                        <br/>
                        <Box mb={2}>
                            <TextField className={styles.formInputLong} label={"About"} variant={"outlined"} onChange={aboutHandler} required multiline rows={5}/>
                        </Box>
                        <Box mb={4}>
                            <CheckBox/> I agree that I am the owner of the exclusive art with an copyright.
                            <br/>
                            <CheckBox/> I am responsible for the information i publish.
                        </Box>
                        <hr/>
                        <Box mb={12}>
                            <Button color="secondary" variant="outlined" type="submit">Submit Art</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddArt;
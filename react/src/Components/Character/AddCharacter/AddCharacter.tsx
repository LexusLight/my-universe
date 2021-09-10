import React, {useState} from 'react';
import style from './AddCharacter.module.css';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {charStyles} from "../../Style/Styles";
import {Box, Button, Grid, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import {AccountBox, AccountCircle, Attachment, Brush, CheckBox, PhotoCamera, Publish} from "@material-ui/icons";

//Форма слишком большая, раскидать на компоненты

const sexvars = [
    {
        value: "M",
        label: "Male",
    },
    {
        value: "F",
        label: "Female",
    },
    {
        value: "O",
        label: "Other",
    },
]


const AddCharacter = () => {
    const styles = charStyles();

    let [message,setMessage] = useState("");
    let [name,setName] = useState(""); //Краткое имя, показывающееся в списке
    let [avatar,setAvatar] = useState(''); //Аватарка-кружочек, показывающийся в списке
    let [avatar_url,setAvatarURL] = useState('');//Необходим ДЛЯ ОТОБРАЖЕНИЯ
    let [sex, setSex] = useState(''); //Пол, показывающийся в списке
    let [full_name,setFullName] = useState(""); //Полное имя персонажа
    let [about,setAbout] = useState("About..."); //Описание и история персонажа
    let [likes, setLikes] = useState(''); //Список того, что любит персонаж
    let [dislikes, setDislikes] = useState(''); //Список того, что не любит персонаж
    let [image,setImage] = useState('');//Изображение-портрет персонажа
    let [reference,setReference] = useState('');//Изображение-референс
    let [image_url,setImageURL] = useState('');//Изображение-портрет персонажа ДЛЯ ОТОБРАЖЕНИЯ
    let [reference_url,setReferenceURL] = useState('');//Изображение-референс ДЛЯ ОТОБРАЖЕНИЯ


    const addCharacter = async(event:any) => {
        event.preventDefault();
        let token = localStorage.getItem("universe_token");
        token = (token == null) ? 'nothing': token;
        let data = new FormData();
        data.append('name',name);
        data.append('avatar',avatar,uuidv4()+'.png');
        data.append('sex', sex);
        data.append('full_name',full_name);
        data.append('about',about);
        data.append('likes',likes);
        data.append('dislikes',dislikes);
        data.append('reference',reference, uuidv4()+'.png');
        data.append('image',image,uuidv4()+'.png');
        data.append('token',token);
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
        setFullName(event.target.value);
    }
    const avatarHandler = (event:any) => {
        setAvatar(event.target.files[0]);
        let avatar_path = URL.createObjectURL(event.target.files[0]);
        setAvatarURL(avatar_path);
    }
    const sexHandler = (event:any) => {
        setSex(event.target.value);
    }
    const fullNameHandler = (event:any) => {
        setFullName(event.target.value);
    }
    const aboutHandler = (event:any) => {
        setAbout(event.target.value);
    }
    const imageHandler = (event:any) => {
        setImage(event.target.files[0]);
        let image_path = URL.createObjectURL(event.target.files[0]);
        setImageURL(image_path);
    }
    const referenceHandler = (event:any) => {
        setReference(event.target.files[0]);
        let ref_path = URL.createObjectURL(event.target.files[0]);
        setReferenceURL(ref_path);
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
                    <Typography variant={"h4"}>Add character</Typography>
                    <br/>
                    <form onSubmit={addCharacter}>
                        <div color={"red"}>{message}</div>
                        <br/>
                        <hr/>
                        <Typography variant={"h6"}> Display Information</Typography>
                        <Box mb={2}>
                            <Typography>Avatar</Typography>
                            <input
                                id="avatar-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                type="file"
                                onChange={avatarHandler}
                            />
                            <label htmlFor="avatar-input">
                                <Button color="default"
                                        className={styles.avatarCircle}
                                        variant="contained"
                                        component="span"
                                        style={{
                                            backgroundImage:`url(${avatar_url})`,
                                            backgroundSize: 'cover',
                                        }}>
                                    {!(avatar_url != '') &&<AccountCircle className={styles.picIcon}/>}
                                </Button>
                            </label>
                        </Box>

                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} type="text" label={"Name"} value={name} onChange={nameHandler} required/>
                        </Box>

                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} select style={{textAlign:"left"}} label={"Sex"} value={sex} onChange={sexHandler} required>
                                {sexvars.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        <hr/>
                        <Typography variant={"h6"}> Full Info</Typography>
                        <br/>
                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} type="text" label={"Full name"} value={full_name} onChange={fullNameHandler} required/>
                        </Box>
                        <Box mb={2}>
                            <Typography>Portrait</Typography>
                            <input
                                id="image-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                type="file"
                                onChange={imageHandler}
                            />
                            <label htmlFor="image-input" >
                                <Button color="default"
                                        className={styles.imagePortrait}
                                        variant="contained"
                                        component="span"
                                        style={{
                                            backgroundImage:`url(${image_url})`,
                                            backgroundSize: 'cover',
                                        }}>
                                    {!(image_url != '') &&<AccountBox className={styles.picIcon}/>}
                                </Button>
                            </label>
                        </Box>

                        <Box mb={2}>
                            <TextField className={styles.formInputLong} label={"About"} variant={"outlined"} onChange={aboutHandler} required multiline rows={5}/>
                        </Box>

                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} value={likes} label={"Likes"} type="text" onChange={likesHandler}/>
                        </Box>
                        <Box mb={2}>
                            <TextField className={styles.formInputLong} variant={"outlined"} value={dislikes} label={"Dislikes"} type="text" onChange={dislikesHandler}/>
                        </Box>

                        <Box mb={2}>
                            <Typography>Reference</Typography>
                            <input
                                id="ref-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                type="file"
                                onChange={referenceHandler}
                            />
                            <label htmlFor="ref-input" >
                                <Button color="default"
                                        className={styles.imageReference}
                                        variant="contained"
                                        component="span"
                                        style={{
                                            backgroundImage:`url(${reference_url})`,
                                            backgroundSize: 'cover',
                                        }}>
                                    {!(reference_url != '') &&<Attachment className={styles.picIcon}/>}
                                </Button>
                            </label>
                        </Box>
                        <Box mb={4}>
                            <CheckBox/> I agree that I am the owner of the exclusive character with an copyright.
                            <br/>
                            <CheckBox/> I am responsible for the information i publish.
                        </Box>
                        <hr/>
                        <Box mb={12}>
                            <Button color="secondary" variant="outlined" type="submit"> Submit Character</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddCharacter;
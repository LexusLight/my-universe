import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Box, Button, TextField, makeStyles, Paper, Grid, Typography} from "@material-ui/core";
//import {Alert, AlertTitle} from "@material-ui/lab";
import {PhotoCamera} from "@material-ui/icons";
import {useHistory} from 'react-router-dom'
import {regStyles} from "../../Style/Styles";
import userStore from "../../../Stores/UserStore";


const Reg = () => {
    const styles = regStyles();
    const history = useHistory();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [image,setImage] = useState("");
    const [image_url,setImageURL] = useState("");
    const [message,setMessage] = useState("");

    const addUser = async(event:any) => { //Отправка данных с формы на сервер
        event.preventDefault();
        let text = "Пароли не совпадают"
        if(password === password2){
            let data = new FormData();
            data.append('username',username);
            data.append('email',email);
            data.append('password',password);

            try{
                data.append('image',image,uuidv4()+'.png'); //добавление файла с уникальным именем
            }catch (e){
                setMessage("Выберите аватарку");
                return;
            }

            try{
                const  response = await axios.post('http://localhost:1337/api/reg',data);
                const token = await response.data.token;
                const username = await response.data.username;
                text = username;
                localStorage.setItem("universe_token",token);
                localStorage.setItem("universe_username",username);
                userStore.setUser();
            }catch(error) {
                text = error.response.data;
            }
        }
        setMessage(text);
        history.push(`/profile/page/${username}`);
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
    const imageHandler = (event:any) => { //обработчик картинки подменяет блок подгрузки
        setImage(event.target.files[0]);
        let image_path = URL.createObjectURL(event.target.files[0]);
        setImageURL(image_path);
    }

    return (
        <Paper>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box pb={10} pt={10} minHeight={"70vh"}>
                        <Typography variant={"h5"}>REGISTRATION</Typography>
                        <br/>
                        <form onSubmit={addUser}>
                            <Box mb={2}>
                                <input
                                    id="avatar-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    type="file"
                                    onChange={imageHandler}
                                />
                                <label htmlFor="avatar-input" >
                                    <Button color="default"
                                            className={styles.avatarCircle}
                                            variant="contained"
                                            component="span"
                                            style={{
                                                backgroundImage:`url(${image_url})`,
                                                backgroundSize: 'cover',
                                            }}>
                                        {!(image_url != '') &&<PhotoCamera/>}
                                    </Button>
                                </label>
                            </Box>
                            <Box mb={2}>
                                <TextField className={styles.formInput} color={"secondary"} type="text" variant="outlined" label="Username" value={username} onChange={usernameHandler} required/>
                            </Box>
                            <Box mb={2}>
                                <TextField className={styles.formInput} color={"secondary"} type="email" variant="outlined" label="Email" value={email} onChange={emailHandler} required/>
                            </Box>
                            <Box mb={2}>
                                <TextField className={styles.formInput} color={"secondary"} type="password" variant="outlined" label="Password" value={password} onChange={passwordHandler} required/>
                            </Box>
                            <Box mb={2}>
                                <TextField className={styles.formInput} color={"secondary"} type="password" variant="outlined" label="Password" value={password2} onChange={password2Handler} required/>
                            </Box>

                            {message &&
                            <Box mb={2} className={styles.formError}>
                                {/*<Alert severity="error" >*/}
                                {/*    <AlertTitle>{message}</AlertTitle>*/}
                                {/*</Alert>*/}
                            </Box>}

                            <Button color="secondary" variant="outlined" type="submit"> Register </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Reg;
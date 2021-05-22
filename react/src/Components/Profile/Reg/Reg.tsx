import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Box, Button, TextField, makeStyles, Paper, Grid, Typography} from "@material-ui/core";
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
    let [image,setImage] = useState("");
    let [message,setMessage] = useState("");

    const addUser = async(event:any) => {
        event.preventDefault();
        let text = "Пароли не совпадают"
        if(password === password2){
            let data = new FormData();
            data.append('username',username);
            data.append('email',email);
            data.append('password',password);

            try{
                data.append('image',image,uuidv4()+'.png');
            }catch (e){
                setMessage("Выберите аватарку");
                return;
            }

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
        <Paper>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box pb={10} pt={10}>
                        <Typography>Registration</Typography>
                        <br/>
                        <form onSubmit={addUser}>
                            <div color={"red"}>{message}</div>
                            <Box mb={2}>
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
                            <Button color="secondary" variant="outlined" type="submit"> Register </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Reg;
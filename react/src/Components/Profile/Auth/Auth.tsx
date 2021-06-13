import React from 'react';
import {useState} from 'react'
import logo from './logo.svg';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import axios from 'axios'
import {Box, Button, Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import userStore from "../../../Stores/UserStore";
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles({
    formInput:{
        width: '51%',
        maxWidth: 400,
    },
})


const Auth = () => {
    const styles = useStyles();
    const [username,setUsername] = useState("username");
    const [password,setPassword] = useState("password");
    const [message,setMessage] = useState("");

    const history = useHistory();

    const authUser = async(event:any) => {
        event.preventDefault();
        let data = new FormData();
        data.append('password',password);
        data.append('username',username);

        let response:any;
        let status:number;

        try{
            response = await axios.post('http://localhost:1337/api/auth', data);
            status = response.status;
        }catch(error){
            status = error.response.status;
            response = error.response;
        }

        if(status != 401) {
            const text = "Вы авторизованы.";
            setMessage(text);
            const token = await response.data.token;
            const username = await response.data.username;
            localStorage.setItem("universe_token",token);
            localStorage.setItem("universe_username",username);
            userStore.setUser();
            history.push('/profile/page');
        }else{
            const text = await response.data;
            setMessage(text);
        }
    }

    const usernameHandler = (event:any) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event:any) => {
        setPassword(event.target.value);
    }



    return (
        <Paper>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box pb={10} pt={10}>
                        <Typography>Authorization</Typography>
                        <form onSubmit={authUser}>
                            <Box mb={2} color={"red"}>
                                {message}
                            </Box>

                            <Box mb={2}>
                                <TextField className={styles.formInput} color="secondary" type="text" variant="outlined" label="Username" value={username} onChange={usernameHandler} required/>
                            </Box>

                            <Box mb={2}>
                                <TextField className={styles.formInput} color="secondary" type="password" variant="outlined" label="Password" value={password} onChange={passwordHandler} required/>
                            </Box>

                            <Button color="secondary" variant="outlined" type="submit"> Авторизация </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        </Paper>
    );
}

export default Auth;
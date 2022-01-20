import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {characterProfile} from "../../../Props/Props";
import {Add} from "@material-ui/icons";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import React, {useEffect, useState} from "react";
import {pageStyles} from "../../Style/Styles";
import Arts from "./Arts";
import {useHistory} from 'react-router-dom'
import {useParams} from "react-router-dom";
import axios from "axios";

const Characters = () => {
    const styles = pageStyles();
    const history = useHistory();
    const {username} = useParams();
    const [characters,setCharacters] = useState([]);

    useEffect(() => {
        const getRequests = async () => {
            let response = await axios.get(
                'http://localhost:1337/api/character_list',
                {
                    params: {
                        username: username,
                    }
                }
            )
            setCharacters(response.data)
        }
        getRequests();
    },[username])

    const goToAddCharacter = () => {
        history.push(`/profile/add_character`);
    }

    return(
        <Grid container justify={"flex-start"} wrap={"wrap"}>
            {characters.map((item:characterProfile)=>{
                return(
                    <Grid item lg={2} md={4} sm={4} xs={6} key={item.id}>
                        <Paper>
                            <Box className={styles.characterCircle} style={characters&&{backgroundImage:`url(http://127.0.0.1:1337/${item.avatar})`}}/>
                            <Typography variant={"h6"}>{item.name}</Typography>
                            <Typography variant={"h6"}>
                                {item.sex=="M"&&<MaleIcon/>}
                                {item.sex=="F"&&<FemaleIcon/>}
                                {item.sex=="O"&&<TransgenderIcon/>}
                            </Typography>
                        </Paper>
                    </Grid>
                )
            })}
            {localStorage.getItem("universe_username") == username &&
            <Grid item lg={2} md={4} sm={4} xs={6}>
                <Paper>
                    <Box className={styles.characterCircle} onClick={goToAddCharacter}>
                        <Add style={{marginTop:'25%',fontSize:50}}/>
                    </Box>
                    <Typography variant={"h6"}> New</Typography>
                    <Typography variant={"h6"}>Char</Typography>
                </Paper>
            </Grid>}
        </Grid>

    )
}
export default Characters
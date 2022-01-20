import {Box, Grid, Paper} from "@material-ui/core";
import {AddPhotoAlternate} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import {pageStyles} from "../../Style/Styles";
import {useParams} from "react-router-dom";
import axios from "axios";

const Arts = () => {
    const styles = pageStyles();
    const {username} = useParams();
    const [arts,setArts] = useState([]);

    useEffect(() => {
        const getRequests = async () => {
            let response = await axios.get(
                'http://localhost:1337/api/art_list',
                {
                    params: {
                        username: username,
                    }
                }
            )
            setArts(response.data)
        }
        getRequests();
    },[])

    return(
        <Grid container justify={"flex-start"} alignItems={"center"} direction="row">
            {arts.map((item:any)=>{
                return(
                    <Grid item md={4} sm={4} xs={4} key={item}>
                        <Paper>
                            <Box className={styles.artImage} style={arts&&{backgroundImage:`url(http://127.0.0.1:1337/${item.img_url})`}}>
                            {/*    Что то такое ляля*/}
                            </Box>
                        </Paper>
                    </Grid>
                )
            })}
            {arts.length < 5 && localStorage.getItem("universe_username") == username &&
            <Grid item md={4} sm={4} xs={4}>
                <Paper className={styles.artImage}>
                    <AddPhotoAlternate style={{fontSize:50, marginTop:70}}/>
                </Paper>
            </Grid>
            }
        </Grid>

    )
}
export default Arts
import React, {useEffect, useState} from 'react'
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import {pageStyles} from "../../Style/Styles";
import {useParams} from "react-router-dom";
import {defaultProps} from "../../../Props/Props";
import axios from "axios";
import Arts from "./Arts"
import Links from "./Links";
import Characters from "./Characters";


const Page = (props:defaultProps) => {
    const styles = pageStyles();
    const {username} = useParams();

    const [avatar,setAvatar] = useState();

    useEffect(() => {
        const getRequests = async () => {
            return await axios.get(
                'http://localhost:1337/api/avatar',
                {
                    params: {
                        username: username,
                    }
                }
            )
        }
        getRequests().then((response:any)=>{
            setAvatar(response.data.img_url)
        })
    },[username])

    return (
        <Paper>
            {/*Аватарка, каритнка и описание*/}
            <Grid container >
                <Grid xl={5} lg={5} md={12} sm={12} xs={12} item>

                    <Grid container justify={"center"}>
                        <Grid md={12} item>
                            <Grid container justify={"space-between"}>
                                <Grid xl={12} lg={12} item md={12} sm={12} xs={12}>
                                    <Box className={styles.avatarCircle}
                                         border={1} mt={1}
                                         style={avatar&&{backgroundImage:`url(http://127.0.0.1:1337/${avatar})`}} //Как поставить https?
                                    >
                                    </Box>
                                    <br/>
                                    <Typography variant={"h5"}>
                                        @{username}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xl={7} lg={7} md={12} sm={12} xs={12} item>
                    <Box className={styles.page_block} mt={6} pr={8} pl={8} mb={2}>
                        <Typography variant={"h5"}>
                            About
                        </Typography>
                        <br/>
                        <Typography variant={"subtitle1"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box className={styles.align_links} border={1} pt={2} pb={2} mt={2}>
                        <Typography variant={"h5"}>
                            Links
                        </Typography>
                        <Box>
                            <Links/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box className={styles.characters_block} pt={2} border={1} borderTop={0}>
                        <Typography variant={"h5"}>Characters</Typography>
                        <br/>
                        <Box>
                            <Characters/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box pt={2}>
                        <Typography variant={"h5"}>Gallery</Typography>
                        <br/>
                        <Box border={1}>
                            <Arts/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Page;
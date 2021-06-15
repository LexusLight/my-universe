import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Box, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {BorderInner, PhotoCamera} from "@material-ui/icons";
import useStyles from "./PageStyles";
import {defaultProps} from "../../../Props/Props";


const Page = (props:defaultProps) => {
    const styles = useStyles();

    const Links = () => {
        let arr = ["DeviantArt","Vkontakte","Facebook","Twitter","Furaffinity","Skype","Discord","Sample"]
        return(
            <Grid container>
                {arr.map((item:string)=>{
                    return(
                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3} key={item} >
                            {item}
                        </Grid>
                        )
                })}
            </Grid>

        )
    }

    const Characters = () => {
        let arr = ["Character1","Character2","Character3","Character4","Character5","Character6"]
        return(
            <Grid container justify={"center"} wrap={"wrap"}>
                {arr.map((item:string)=>{
                    return(
                        <Grid item lg={2} md={4} sm={4} xs={6} key={item}>
                            <Paper>
                                <Box className={styles.characterCircle}></Box>
                                <Typography>{item}</Typography>
                                <Typography variant={"h6"}>♂</Typography>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>

        )
    }

    const Arts = () => {
        let arr = ["Art1","Art2","Art3","Art4","Art5","Art6"]
        return(
            <Grid container justify={"flex-start"}>
                {arr.map((item:string)=>{
                    return(
                        <Grid item md={4} sm={4} xs={4} key={item}>
                            <Paper>
                                <Box className={styles.artImage} bgcolor={"blue"}>{item}</Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>

        )
    }

    return (
        <Paper>
            {/*Аватарка, каритнка и описание*/}
            <Grid container >
                <Grid xl={5} lg={5} md={12} sm={12} xs={12} item>

                    <Grid container justify={"center"}>
                        <Grid md={12} item>
                            <Grid container justify={"space-between"}>
                                <Grid xl={12} lg={12} item md={12} sm={12} xs={12}>
                                    <Box className={styles.avatarCircle} border={1} mt={1}>
                                    </Box>
                                    <br/>
                                    <Typography variant={"h5"}>
                                        @{props.userStore?.username}
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
                        <Box>
                            {Links}
                        </Box>
                    </Box>
                </Grid>

                {/*<Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={styles.content_padding}>*/}
                {/*    <Box className={styles.characters_block} bgcolor={"pink"}>*/}
                {/*        <Typography variant={"h5"}>My Squad</Typography>*/}
                {/*        <Box>*/}
                {/*            {Characters}*/}
                {/*        </Box>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box className={styles.characters_block} pt={2} border={1} borderTop={0}>
                        <Typography variant={"h5"}>Characters</Typography>
                        <br/>
                        <Box>
                            {Characters}
                        </Box>
                    </Box>
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Box pt={2}>
                        <Typography variant={"h5"}>Gallery</Typography>
                        <br/>
                        <Box border={1}>
                            {Arts}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Page;
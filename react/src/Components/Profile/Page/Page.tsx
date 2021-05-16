import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Box, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import useStyles from "./PageStyles";


const Page = () => {
    const styles = useStyles();

    const Links = () => {
        let arr = ["link1","link2","link3","link4","link5","link6","link7","link8"]
        return(
            <Grid container>
                {arr.map((item:string)=>{
                    return(
                        <Grid item md={3} key={item}>
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
                        <Grid item md={4} sm={4} xs={6} key={item}>
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

    return (
        <Paper>
            {/*Аватарка, каритнка и описание*/}
            <Grid container >

                <Grid xl={5} lg={5} md={8} sm={12} xs={12} item className={styles.content_padding}>

                    <Grid container justify={"center"}>
                        <Grid md={12} item>
                            <Grid container justify={"space-between"}>
                                <Grid xl={12} lg={12} item md={6} sm={12} xs={12}>
                                    <Box className={styles.avatarCircle} bgcolor={"cyan"}>
                                    </Box>
                                    <br/>
                                    <Typography variant={"h5"}>
                                        @Username
                                    </Typography>
                                </Grid>

                                <Grid item xl={12} lg={12} md={6} sm={12} xs={12}>
                                    <br/>
                                    <Box>
                                        {Links}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid xl={7} lg={7} md={12} sm={12} xs={12} item className={styles.content_padding}>
                    <Box className={styles.page_block}>
                        <Typography variant={"h5"}>
                            Описание
                        </Typography>
                        <br/>
                        <Typography variant={"subtitle1"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Box>
                </Grid>

            </Grid>

            {/*Список персонажей*/}
            <Box className={styles.characters_block} bgcolor={"pink"}>
                <Typography variant={"h5"}>Персонажи</Typography>
                <Box>
                    {Characters}
                </Box>
            </Box>

            {/*Галерея*/}
            {/*<Grid container justify={"flex-start"}>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid md={4} sm={4} xs={4} item>*/}
            {/*        <Box className={styles.art_block} bgcolor={"blue"}>Область 1</Box>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </Paper>
    );
}

export default Page;
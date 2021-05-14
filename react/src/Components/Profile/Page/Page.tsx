import React, {useRef} from 'react'
import {useState} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Box, Grid, makeStyles} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";


const useStyles = makeStyles({
    avtarCircle:{
        height:300,
        width:300,
        //marginTop:10,
        borderRadius:50,
    },
    block:{
        height: 300,
    },
})

const Page = () => {
    const styles = useStyles();

    return (
        <div>
            {/*Аватарка, каритнка и описание*/}
            <Grid container justify={"flex-start"}>
                <Grid md={6} sm={6} xs={12} item>
                    <Box className={styles.block} bgcolor={"red"}>Область 1</Box>
                </Grid>
                <Grid md={6} sm={6} xs={12}item>
                    <Box className={styles.block} bgcolor={"green"}>Область 2</Box>
                </Grid>
            </Grid>

            {/*Список персонажей*/}
            <Grid container justify={"flex-start"}>
                <Grid md={12} item>
                    <Box className={styles.block} bgcolor={"pink"}>Область 1</Box>
                </Grid>
            </Grid>

            {/*Галерея*/}
            <Grid container justify={"flex-start"}>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
                <Grid md={4} sm={4} xs={4} item>
                    <Box className={styles.block} bgcolor={"blue"}>Область 1</Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default Page;
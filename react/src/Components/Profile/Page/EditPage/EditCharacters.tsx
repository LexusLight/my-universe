import {Box, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import {pageStyles} from "../../../Style/Styles";

const EditCharacters = () => {
    let styles = pageStyles();
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

export default EditCharacters;
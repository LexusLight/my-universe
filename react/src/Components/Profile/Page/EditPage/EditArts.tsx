import {Box, Grid, Paper} from "@material-ui/core";
import React from "react";
import {pageStyles} from "../../../Style/Styles";

const EditArts = () => {
    let styles = pageStyles();
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

export default EditArts;
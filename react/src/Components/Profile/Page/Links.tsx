import {Grid} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {pageStyles} from "../../Style/Styles";
import Arts from "./Arts";
import axios from "axios";

const Links = () => {
    const styles = pageStyles();
    const [links,setLinks] = useState();
    // useEffect(() => {
    //     const getRequests = async () => {
    //         let response = await axios.get(
    //             'http://localhost:1337/api/character_list',
    //             {
    //                 params: {
    //                     username: username,
    //                 }
    //             }
    //         )
    //         setCharacters(response.data)
    //     }
    //     getRequests();
    // },[])

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
export default Links
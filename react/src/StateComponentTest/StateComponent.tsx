import React from 'react';
import style from './Character.module.css'
import useRequest from "./State";
import {Box} from "@material-ui/core";

const Character = (props:any) => {
    let url = props.url;
    const state = useRequest(url);

    return (
        <Box>
            Что вы получили с сервера:
            <br/>
            {JSON.stringify(state)}
        </Box>
    );
}

export default Character;
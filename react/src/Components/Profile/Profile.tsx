import React from 'react';
import Reg from "./Reg/Reg";
import Auth from "./Auth/Auth";
import File from "./File/File";
import AddCharacter from "../Character/AddCharacter/AddCharacter";
import {Route,Switch,useRouteMatch} from 'react-router-dom'
import style from './Profile.module.css'

const Profile = () => {
    const {url,path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${url}/reg`}><Reg/></Route>
            <Route path={`${url}/auth`}><Auth/></Route>
            <Route path={`${url}/add_character`}><AddCharacter/></Route>
            <Route path={`${url}/file`}><File/></Route>
        </Switch>
    );
}

export default Profile;
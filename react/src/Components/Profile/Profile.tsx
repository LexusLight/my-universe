import React from 'react';
import Reg from "./Reg/Reg";
import Auth from "./Auth/Auth";
import {Route,Switch,useRouteMatch} from 'react-router-dom'
import style from './Profile.module.css'

const Profile = () => {
    const {url,path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${url}/reg`}><Reg/></Route>
            <Route path={`${url}/auth`}><Auth/></Route>
        </Switch>
    );
}

export default Profile;
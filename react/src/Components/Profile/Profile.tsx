import React from 'react';
import Reg from "./Reg/Reg";
import Auth from "./Auth/Auth";
import Test from "./Test/Test";
import AddCharacter from "../Character/AddCharacter/AddCharacter";
import {Route,Switch,useRouteMatch} from 'react-router-dom'
import characterStore from "../../Stores/CharacterStore";
import Page from "./Page/Page";

const Profile = () => {
    const {url,path} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${url}/reg`}><Reg/></Route>
            <Route path={`${url}/auth`}><Auth/></Route>
            <Route path={`${url}/add_character`}><AddCharacter/></Route>
            <Route path={`${url}/page`}><Page/></Route>
            <Route path={`${url}/test`}><Test  store={characterStore}/></Route>
        </Switch>
    );
}

export default Profile;
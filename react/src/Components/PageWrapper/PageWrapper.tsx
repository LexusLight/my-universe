import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import style from './PageWrapper.module.css'
import Profile from "../Profile/Profile";
import World from "../World/World";
import Character from "../Character/Character";

const PageWrapper = () => {
    return (
        <BrowserRouter>
            <div className={style.hat}>
                Невероятная шапка сайта
            </div>
            <br/>
            <Switch>
                <Route path={'/profile'}><Profile/></Route>
                <Route path={'/world'}><World/></Route>
                <Route path={'/character'}><Character/></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default PageWrapper;
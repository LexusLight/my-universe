import React from "react";
import userStore from "../Stores/UserStore";

export interface defaultProps{
    userStore?: typeof userStore,
}

export interface characterProfile extends Object{
    id?: number,
    name?: string,
    sex?: string,
    avatar?: string,
}
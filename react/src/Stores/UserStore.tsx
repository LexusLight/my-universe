import {makeObservable, observable, computed, autorun, action} from "mobx"
import axios from 'axios'

// Model the application state.
class UserStore{

    username: string | null = null;
    token: string | null = null;

    constructor() {
        makeObservable(this,{
            username: observable,
            token: observable,
            setUser: action,
            resetUser: action,
            storeInfo: action,
        });
        autorun(()=>{
            this.setUser();
            this.storeInfo();
        })
    }

    setUser = () => {
        this.username = localStorage.getItem("universe_username");
        this.token = localStorage.getItem("universe_token");
    }

    resetUser = () => {
        this.username = null;
        this.token = null;
        localStorage.clear();
    }

    storeInfo = () => {
        console.log("username: "+this.username);
        console.log("token: "+this.token);
    }
}

const userStore = new UserStore()

export default  userStore
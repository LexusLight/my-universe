import {makeObservable, observable, computed, autorun, action} from "mobx"
import axios from 'axios'

// Model the application state.
class UserStore{

    username: string = '';
    token: string | null = null;
    avatar: string | null = null;

    constructor() {
        makeObservable(this,{
            username: observable,
            token: observable,
            setUser: action,
            resetUser: action,
            getInfo: action,
        });
        autorun(()=>{
            this.setUser();
            this.getInfo();
        })
    }

    setUser = () => {
        this.username = localStorage.getItem("universe_username") || '';
        this.token = localStorage.getItem("universe_token");
    }

    getInfo = () => {
        //тут будем подгружать статусы
    }

    resetUser = () => {
        this.username = '';
        this.token = null;
        localStorage.clear();
    }
}

const userStore = new UserStore()

export default  userStore
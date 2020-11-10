import {makeAutoObservable, observable, action} from "mobx"
import axios from 'axios'

// Model the application state.
class CharacterStore{

   character_list:any;

    constructor() {
        this.character_list = [];
        makeAutoObservable(this)
    }

    getCharacters = async (username:string = 'username5') => {
        let url = `http://127.0.0.1:1337/api/character_list?username=${username}`;
        let response = await axios.get(url);
        this.character_list = await response.data;
        return this.character_list;
    }

    resetCharacters = () => {
        this.character_list = [];
    }
}

const characterStore = new CharacterStore()

export default  characterStore
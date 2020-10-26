import {makeAutoObservable, observable, action} from "mobx"
import axios from 'axios'

// Model the application state.
class CharacterStore{

   character_list:any;

    constructor() {
        this.character_list = [];
        makeAutoObservable(this)
    }

    getCharacters = async () => {
        let response = await axios.get('127.0.0.1:1337/api/character_list')
        this.character_list = await response.data;
        return this.character_list;
    }

    resetCharacters = () => {
        this.character_list = [];
    }
}

const characterStore = new CharacterStore()

export default  characterStore
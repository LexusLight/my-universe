import {observable} from 'mobx';

class MenuStore {
    @observable show:boolean; //МобХ наблюдает за этой штукой

    constructor() {
        this.show = false;
    }

    toggleLeftPanel() {
        this.show = !this.show;
    }
}

const menuStore = new MenuStore();

export default menuStore;
export { MenuStore };
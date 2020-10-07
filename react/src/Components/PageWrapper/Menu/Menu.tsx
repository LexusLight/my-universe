import React from 'react';
import logo from './logo.svg';
import {observer} from 'mobx-react'

const Menu = observer(() => {
    return (
        <nav>
            <div>☰</div>
        </nav>
    );
})

export default Menu;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PageWrapper from "./Components/PageWrapper/PageWrapper";
import {Provider} from "mobx-react";
import mainStore from "./Stores/MenuStore";



const stores = {
    mainStore,
    // optionsStore,
    // ButtonStore : mainStore.ButtonStore,
    // FioStore : mainStore.FioStore,
    // EmailStore : mainStore.EmailStore
};

ReactDOM.render(
  <React.StrictMode>
      <Provider>
          <PageWrapper/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

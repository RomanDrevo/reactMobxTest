import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import testStore from './store'
import 'react-bootstrap/dist/react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth from './Auth'

const auth = new Auth()

const stores = {testStore}

let state = {}

window.setState = (changes) => {
    state = Object.assign({}, state, changes)

    ReactDOM.render(
        <Router>
            <Provider {...stores}>
                <App {...state} />
            </Provider>
        </Router>
        , document.getElementById('root'));
}

let initialState = {
    name: 'Roman',
    auth
}

window.setState(initialState)


registerServiceWorker();



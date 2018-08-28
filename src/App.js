import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {inject, observer} from 'mobx-react';
import Swiper from 'react-id-swiper';
import {Grid} from "react-bootstrap";
import axios from 'axios'
import Home from "./Home";
import {Route, Switch, withRouter} from "react-router-dom";
import Admin from "./Admin";
import PageNotFound from "./PageNotFound";
import AuthCallback from "./AuthCallback";

@withRouter
@inject('testStore')
@observer
class App extends Component {

    componentDidMount(){
        axios.get('//localhost:3001/posts').then((response) => console.log('response: ', response.data))
    }

    render() {
        const {name, location, history} = this.props
        console.log('Name: ', name)
        console.log('Props: ', this.props)

        return (
            <Grid>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Switch>
                    {/*//path all props to route*/}
                    <Route exact path="/" render={() => <Home {...this.props}/>}/>

                    <Route exact path="/admin" component={Admin}/>

                    <Route exact path="/auth-callback" component={AuthCallback}/>

                    <Route component={PageNotFound} />
                </Switch>

            </Grid>
        );
    }
}

export default App;

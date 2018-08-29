import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {inject, observer} from 'mobx-react';
import {Grid} from "react-bootstrap";
import axios from 'axios'
import Home from "./Home";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Admin from "./Admin";
import PageNotFound from "./PageNotFound";
import AuthCallback from "./AuthCallback";
import Auth from "./Auth";


const auth = new Auth()

const fakeAuth = {
    isAuthenticated: false
}

class PrivateRoute extends Component{
    render(){
        const Component = this.props.component
        const isAuthenticated = auth.isAuthenticated()
        console.log('Here!!!, auth: ', isAuthenticated)
        return (
            <Route render={(props) => (
                isAuthenticated ? <Component {...props} />
                    : <Redirect to='/unatorized' />
            )} />
        )
    }
}

@withRouter
@inject('testStore')
@observer
class App extends Component {

    componentDidMount(){
        axios.get('//localhost:3001/posts').then((response) => console.log('response: ', response.data))
    }


    render() {
        const {auth} = this.props
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

                    <Route path="/callback" component={AuthCallback}/>

                    <Route path="/unatorized" component={PageNotFound} />
                    <PrivateRoute path='/admin' component={Admin} />
                </Switch>

            </Grid>
        );
    }
}

export default App;

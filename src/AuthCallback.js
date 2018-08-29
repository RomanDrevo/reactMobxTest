import React, {Component} from 'react';
import Aauth from './Auth'

class AuthCallback extends Component {

    componentDidMount(){
        const auth = new Aauth
        auth.handleAuthentication()
    }

    render() {
        const {} = this.props

        return (
            <div>
                <h1>Auth Callback</h1>
            </div>
        );
    }
}

export default AuthCallback;

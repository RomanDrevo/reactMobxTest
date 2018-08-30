import React, {Component} from 'react';
import {inject, observer} from "mobx-react/index";
import Input from 'muicss/lib/react/input'
import {Link} from "react-router-dom";

@inject('testStore')
@observer
class Home extends Component {

    render() {
        const {testStore, name, auth} = this.props
        console.log('Home Props: ', this.props)

        return (
            <div>
                <h1>Hello, {name}, DIKT!</h1>
                <p className="App-intro">
                    Do you want to get to Admin page? <Link to='/admin'>Click here</Link>
                </p>

                <div>
                    {
                        !auth.isAuthenticated() ?
                        <div>
                            <h4>Login first</h4>
                            <button onClick={auth.login}>Login</button>
                        </div>
                            :
                            <button onClick={auth.logout}>Logout</button>

                    }

                </div>

                <h1>Is hidden: {testStore.isHidden}</h1>

                {/*<Input label="Input 1" floatingLabel={false} value="xxx"/>*/}
            </div>
        );
    }
}

export default Home;

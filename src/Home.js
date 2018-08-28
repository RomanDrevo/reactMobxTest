import React, { Component } from 'react';
import {inject, observer} from "mobx-react/index";
import Input from 'muicss/lib/react/input'

@inject('testStore')
@observer
class Home extends Component {

  render() {
      const {testStore, name} = this.props
      console.log('Home Props: ', this.props)

    return (
        <div>
            <h1>Hello, {name}, DIKT!</h1>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>

            <h1>Is hidden: {testStore.isHidden}</h1>

            <Input label="Input 1" floatingLabel={false} value="xxx"/>
      </div>
    );
  }
}

export default Home;

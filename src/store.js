import {observable } from 'mobx';

class TestStore {
    @observable isHidden = "Yes!"
}

const testStore = new TestStore()

export default testStore
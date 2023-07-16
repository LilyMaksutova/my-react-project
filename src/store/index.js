// APP State
const initState = {
  notes: [],
};

class Store {
  constructor() {
    this.state = initState;
  }

  addData(key, val) {
    this.state[key] = val;
  }

  readData(key) {
    return this.state[key];
  }
}

const store = new Store();

export default store;

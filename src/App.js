import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }
  render (){
    return (
      <div className="App">
        <h1>To Do List</h1>
      </div>
    );
  }
}

export default App;

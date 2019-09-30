import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list 
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      newItem: "",
      list
    })
  }

  render (){
    return (
      <div className="App">
        <div>
          Add an item...
          <br/>
          <input
          type = "text"
          placeholder = "Type item here..."
          value = {this.state.newItem}
          onChange = {e => this.updateInput("newItem", e.target.value)}
          />
          <button 
            onClick = {() => this.addItem}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default App;

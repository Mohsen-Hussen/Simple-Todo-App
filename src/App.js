import React, { Component } from 'react';
import TodoItems from './components/TodoItems/Todoitems';
import AddItem from './components/Additem/Additem';

class App extends Component {
  state = {
    items : [
      {id:1,name:'Hamza',age:3},
      {id:2,name:'Mohsen',age:32},
      {id:3,name:'Hussein',age:40}
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({items:items});
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i,1);
    // this.setState({items:items});
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems data={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}
export default App;

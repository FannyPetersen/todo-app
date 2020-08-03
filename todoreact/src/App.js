import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: null,
      value: '',
      list: [],
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value) {
      const newList = this.state.list.concat({
        text: `* ${this.state.value}`,
        checked: false,
        id: Date.now(),
      });

      this.setState({
        list: newList,
        value: '',
      });
    }
  };

  removeCard = id => {
    const newList = this.state.list.filter(el => el.id !== id);

    this.setState({
      list: newList,
    });
  };

  handleClick = event => {
    const id = event.target.id;
    const index = this.state.list.findIndex(el => el.id == id);
    if (event.target.classList.contains('remove')) {
      this.removeCard(id);
    } else {
      const newList = [...this.state.list];
      newList[index] = { ...newList[index], checked: !newList[index].checked };

      this.setState({
        list: newList,
      });
    }
  };

  render() {
    return (
      <TodoList
        list={this.state.list}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        removeCard={this.removeCard}
        value={this.state.value}
      />
    );
  }
}

export default App;

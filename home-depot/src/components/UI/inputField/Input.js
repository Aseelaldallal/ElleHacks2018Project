import React, { Container } from 'react';

class Input extends Container {
  state = { value: '' };

  changeText = () => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.changeText} />
    );
  }
}

export default Input;

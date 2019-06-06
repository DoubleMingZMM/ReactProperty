import React from 'react';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 'zmm'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 })
    if (this.state.count > 5) {
      throw new Error('wocuole');
    }
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="text" />
      </div>
    );
  }
}

export default Example;
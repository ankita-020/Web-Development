import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.props.name + " constructir");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name + "componendDidUpdate");
  }

  render() {
    const { name, location } = this.props;
    console.log(this.props.name + " render");
    return (
      <div>
        <h1>Count 1: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count 1 increase
        </button>
        <h1>Count 2: {this.state.count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count 2 increase
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h3>Cuisine: {this.props.res}</h3>
      </div>
    );
  }
}

export default UserClass;

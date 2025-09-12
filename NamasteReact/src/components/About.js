import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8498481&lng=77.6544856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    this.setState({
      resInfo: {
        name: "Meghana",
        cuisine: "North Indian",
      },
    });
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componendDidUpdate");
  }

  render() {
    return (
      <>
        <h1>About Us: {this.state.resInfo.name}</h1>
        <UserClass
          name="First class"
          location="Bangalore"
          res={this.state.resInfo.cuisines}
        />
        <UserClass
          name="Second Class"
          location="Bangalore"
          res={this.state.resInfo.cuisines}
        />
      </>
    );
  }
}

export default About;

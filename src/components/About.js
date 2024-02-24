import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Class Constructor");
  }

  componentDidMount() {
    console.log("Parent Class Component Did Mount");
  }
  render() {
    console.log("Parent Class Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series</h2>

        <br />
        <UserClass name="Riyaz" location="Solapur" />
      </div>
    );
  }
}

export default About;

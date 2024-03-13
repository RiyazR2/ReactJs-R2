import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Class Constructor");
  }

  componentDidMount() {
    // console.log("Parent Class Component Did Mount");
  }
  render() {
    // console.log("Parent Class Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <br />
        <UserClass name="First" location="Solapur" />
      </div>
    );
  }
}

export default About;

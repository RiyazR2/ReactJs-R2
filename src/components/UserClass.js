import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        // avatar_url: "#Dummy",
      },
    };
    // console.log(this.props.name + " Child Class Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Class Component Did Mount");
    const data = await fetch("https://api.github.com/users/riyazr2");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log("userInfo: ",json);
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log("setInterval Task ");
    }, 1000);
    console.log("ComponedDidUpdate  UPDATE");
  }

  componentWillUnmount() {
    console.log("ComponedWillUnmount  WILL");
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + " Child Class Render");

    const { name, location, avatar_url } = this.state.userInfo; // Extracting name and location

    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <img className="avtar-logo" src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: riyazpathan193.rp@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

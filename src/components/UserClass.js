import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Initial_Dummy_Name",
        location: "Initial_Dummy",
        // avatar_url: "#Dummy",
      },
      userInfo2: {
        name: "Initial_Dummy_Name",
        location: "Initial_Dummy",
        // avatar_url: "#Dummy",
      },
    };
    // console.log(this.props.name + " Child Class Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Class Component Did Mount");
    const data = await fetch("https://api.github.com/users/riyazr2");
    const json = await data.json();

    const data2 = await fetch("https://api.github.com/users/RushikeshGandhmal");
    const json2 = await data2.json();

    this.setState({
      userInfo: json,
      userInfo2: json2,
    });

    console.log("userInfo: ", json);
    console.log("userInfo2: ", json2);
  }

  render() {
    // console.log(this.props.name + " Child Class Render");

    const { name, location, avatar_url } = this.state.userInfo; // Extracting name and location

    return (
      <div>
        <div className="flex justify-center items-center">
          <img
            className="avtar-logo w-[160] h-[160] rounded-full"
            src={avatar_url}
            alt=""
          />
        </div>
        <div className=" my-5 ml-20 flex justify-center items-center ">
          <h2
            className="font-semibold font-mono"
            style={{ whiteSpace: "pre-line" }}
          >
            {name}: {"\n"}Contact: riyazpathan193.rp@gmail.com{"\n"}
            Solapur-Maharashtra {",   "}
            {location}
          </h2>
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="flex justify-center items-center">
          <img
            className="avtar-logo mt-5 w-[160] h-[160] rounded-full"
            src="https://avatars.githubusercontent.com/u/60548902?v=4"
            alt=""
          />
        </div>
        <div className=" my-5 ml-20 flex justify-center items-center ">
          <h2
            className="font-semibold font-mono"
            style={{ whiteSpace: "pre-line" }}
          >
            {this.state.userInfo2.name}:{"\n"}
            {this.state.userInfo2.bio}
            Followers: {this.state.userInfo2.followers}
            {"\n"}
            Solapur-Maharashtra {",   "}
            {this.state.userInfo2.location}
          </h2>
        </div>
      </div>
    );
  }
}

export default UserClass;

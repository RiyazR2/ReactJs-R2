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
            {name} {",  "}
            riyazpathan193.rp@gmail.com
            {"\n"} Solapur-Maharashtra {",   "}
            {location}
          </h2>
        </div>
      </div>
    );
  }
}

export default UserClass;

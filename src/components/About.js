import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      {/* <h1>About Us</h1>
      <h2>This is Namaste React Web Series</h2> */}

      <User name="Riyaz" location="Solapur" />
      <br />
      <UserClass name="Riyaz" location="Solapur" />
    </div>
  );
};

export default About;

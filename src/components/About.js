import UserClass from "./UserClass";
import { Component } from "react";
// import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Class Constructor");
  }

  render() {
    // console.log("Parent Class Render");
    return (
      <div>
        <div className="my-10 text-center">
          <h1 className="font-bold text-lg">About Us</h1>
          {/* <UserClass /> */}
        </div>
        <br />
        <hr />
        <br />
        <div className="mx-40 p-2  border-green-200  text-left ">
          <p>
            {" "}
            🚀 Thrilled to announce the successful wrap-up of Food Bazaar, a web
            app designed for convenient food and grocery delivery! 🍕🛒 This
            exciting project integrates seamlessly with live Swiggy and
            Instamart APIs, ensuring real-time updates and a comprehensive
            selection. Explore the live links and discover the key features that
            make Food Bazaar a standout experience! 🌐🚀
          </p>
          <br />
          <hr />
          <br />
          <h2 className="font-bold ">🎯 Key Features:</h2>
          <br />
          <h4>
            🌏 Real-time Swiggy API Integration: Accurate menus, availability,
            and promotions at your fingertips.
          </h4>
          <h4>
            🚀 Lazy Loading & Chunking: Optimal performance with faster app
            loading times.
          </h4>
          <h4>
            ⚡ Custom Hook: Enhanced code reusability and maintainability for
            efficient development.
          </h4>
          <h4>
            🔐 State Management with Redux: A centralized system for seamless
            user experiences.
          </h4>
          <h4>
            🔍 Search Functionality: Easily discover your favorite restaurants
            and dishes.
          </h4>
          <h4>
            🎯 Filtering Options: Tailor your browsing experience based on
            preferences.
          </h4>
          <h4>
            📌 Seamless Navigation: Explore effortlessly with React Router DOM.
          </h4>
          <h4>
            📜 Detailed Restaurant Information: Make informed choices with
            comprehensive details.
          </h4>
          <h4>
            ✨ Shimmer UI: Engaging loading effects for a polished user
            experience.
          </h4>
          <h4>
            🚧 Error 404 Page: User-friendly in case of page not found or API
            failure.
          </h4>
          <h4>
            📱 Completely Responsive: Enjoy a seamless experience across various
            devices.
          </h4>
          <br />
          <hr />
          <br />
          <h2 className="font-bold">🔧 Tech Stack:</h2>
          <br />
          React: Powering the dynamic and interactive user interface.
          <br />
          <br />
          Parcel: Efficient bundling for streamlined development.
          <br />
          <br />
          Redux Toolkit: Managing application state for a scalable architecture.
          <br />
          <br />
          Tailwind CSS: Crafting a visually appealing and responsive design.
          <br />
          <br />
          React Router: Enabling seamless navigation within the application.
        </div>
        <br />
        <hr />
        <br />
        <UserClass />
      </div>
    );
  }
}

export default About;

import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const Error = () => {
  const err = useRouteError();
  return (
    // <div>
    //   <h1>Oops!!!</h1>
    //   <h2>Something's Went Wrong!!</h2>
    //   <h2>{console.log(err)}</h2>
    //   <h3>
    //     {err.status} : {err.statusText} <br />
    //     {err.data}
    //   </h3>
    // </div>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          {err.status} : {err.statusText}
        </h1>
        {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page not found
        </h2> */}
        <p className="text-gray-600 mb-8 mt-4">
          {/* The page you are looking for might have been removed or is temporarily
          unavailable or you have entered Wrong URL !!! */}
          {err.data}
        </p>

        <Link>
          <img className="w-52 px-4 m-auto mb-5" src={logo} alt="Logo" />
        </Link>

        <Link>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

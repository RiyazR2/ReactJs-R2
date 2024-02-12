import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something's Went Wrong!!</h2>
      <h2>{console.log(err)}</h2>
      <h3>
        {err.status} : {err.statusText} <br />
        {err.data}
      </h3>
    </div>
  );
};

export default Error;

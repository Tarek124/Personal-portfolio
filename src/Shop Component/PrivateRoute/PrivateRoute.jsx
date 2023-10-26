/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserCondition } from "../../App";

const PrivateRoute = ({ children }) => {
  const loggedinUser = useContext(UserCondition);

  return loggedinUser[2].email ? (
    children
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export default PrivateRoute;

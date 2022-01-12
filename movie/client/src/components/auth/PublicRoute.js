import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../../lib/context/AuthContext";

export default function PublicRoute(props) {
  const authContext = useAuthContext();

  if (authContext.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

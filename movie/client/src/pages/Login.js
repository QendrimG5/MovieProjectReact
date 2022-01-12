import LoginForm from "../components/auth/LoginForm";
import { useAuthContext } from "../lib/context/AuthContext";
import API from "../api/index";

export default function Login(props) {
  const authContext = useAuthContext();

  const handleOnSubmit = ({ email, password }) => {
    API.authentication.login(email, password).then((token) => {
      authContext.setLoggedInUser(token);
      props.history.push("/");
    });
  };

  return (
    <div>
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
}

import RegisterForm from "../components/auth/RegisterForm";
import { useAuthContext } from "../lib/context/AuthContext";
import API from "../api/index";

export default function Login(props) {
  const authContext = useAuthContext();

  const handleOnSubmit = ({ email, password, passwordConfirmation }) => {
    API.authentication
      .register(email, password, passwordConfirmation)
      .then((token) => {
        props.history.push("/login");
      });
  };

  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}

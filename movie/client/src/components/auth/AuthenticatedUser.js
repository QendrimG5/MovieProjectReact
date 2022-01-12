import { Alert } from "reactstrap";
import { useAuthContext } from "../../lib/context/AuthContext";

export default function AuthenticatedUser() {
  const authContext = useAuthContext();
  const user = authContext.user;

  if (!user) {
    return null;
  }

  return (
    <Alert>
      <span className="ml-2">Email: {user.email}</span>
      <span style={{ marginLeft: 10 }}>Role: {user.role}</span>
    </Alert>
  );
}

import { default as CustomInput } from "../shared/Input";
import { useState } from "react";
import { Form, Button } from "reactstrap";

export default function LoginForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnTextChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <div style={{ maxWidth: 400 }}>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleOnTextChange}
        />

        <CustomInput
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleOnTextChange}
        />

        <Button className="mt-4">Login</Button>
      </Form>
    </div>
  );
}

import { default as CustomInput } from "../shared/Input";
import { useState } from "react";
import { Form, Button } from "reactstrap";

export default function RegisterForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
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
        <CustomInput
          type="password"
          label="Confirm Password"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleOnTextChange}
        />

        <Button className="mt-4">Register</Button>
      </Form>
    </div>
  );
}

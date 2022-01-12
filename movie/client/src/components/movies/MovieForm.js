import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";
import { default as CustomInput } from "../shared/Input";

const initialState = {
  title: "",
  description: "",
  img: "http://via.placeholder.com/250x250",
  director: "",
  duration: "",
  price: "",
  featured: false,
};

export default function MovieForm(props) {
  const [formData, setFormData] = useState(props.initialValues || initialState);
  const [errors, setErrors] = useState({});

  const handleOnTextChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.title) tempErrors.title = "Title is required!";
    if (!formData.description)
      tempErrors.description = "Description is required!";
    if (!formData.img) tempErrors.img = "Image is required!";
    if (!formData.director) tempErrors.director = "Director is required!";
    if (!formData.duration) tempErrors.duration = "Duration is required!";
    if (!formData.price) tempErrors.price = "Price is required!";
    return tempErrors;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    props.onSubmit(formData);
  };

  return (
    <div className="MovieForm">
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="title"
          value={formData.title}
          error={errors.title}
          onChange={handleOnTextChange}
        />

        <CustomInput
          label="Description"
          name="description"
          value={formData.description}
          error={errors.description}
          onChange={handleOnTextChange}
        />

        <div>
          <FormGroup className="mb-2">
            <Label for="img">Image</Label>
            <Input
              type="text"
              name="img"
              id="img"
              invalid={Boolean(errors.img)}
              value={formData.img}
              onChange={handleOnTextChange}
            />
            <FormFeedback>{errors.img}</FormFeedback>
          </FormGroup>

          {formData.img && <img src={formData.img} />}
        </div>

        <FormGroup>
          <Label for="director">Director</Label>
          <Input
            type="text"
            name="director"
            id="director"
            invalid={Boolean(errors.description)}
            value={formData.director}
            onChange={handleOnTextChange}
          />
          <FormFeedback>{errors.director}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="duration">Duration</Label>
          <Input
            type="text"
            name="duration"
            id="duration"
            invalid={Boolean(errors.duration)}
            value={formData.duration}
            onChange={handleOnTextChange}
          />
          <FormFeedback>{errors.duration}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            id="price"
            invalid={Boolean(errors.price)}
            value={formData.price}
            onChange={handleOnTextChange}
          />
          <FormFeedback>{errors.price}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>
            <Input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleOnCheckboxChange}
            />
            Featured
          </Label>
        </FormGroup>

        <FormGroup>
          <Button type="submit" color="primary">
            Save
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

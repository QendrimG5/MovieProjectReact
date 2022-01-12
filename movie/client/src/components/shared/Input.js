import {
  FormFeedback,
  FormGroup,
  Label,
  Input as ReactStrapInput,
} from "reactstrap";

export default function Input(props) {
  return (
    <FormGroup>
      <Label for="description">{props.label}</Label>
      <ReactStrapInput
        type={props.type || "text"}
        name={props.name}
        invalid={Boolean(props.error)}
        value={props.value}
        onChange={props.onChange}
      />
      <FormFeedback>{props.error}</FormFeedback>
    </FormGroup>
  );
}

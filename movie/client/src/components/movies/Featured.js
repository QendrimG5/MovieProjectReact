import { Button } from "reactstrap";
import { Star } from "react-feather";

export default function Featured(props) {
  const { featured, onClick } = props;
  return (
    <Button color="default" onClick={onClick} style={{ boxShadow: "none" }}>
      <Star
        style={{
          fill: featured ? "green" : "",
          stroke: featured ? "green" : "",
        }}
      />
    </Button>
  );
}

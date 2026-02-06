import { Component } from "react";
import { Container } from "react-bootstrap";

class TitleSection extends Component {
  render() {
    return (
      <Container className="my-3 text-light">
        <h1 className="fs-3">{this.props.title}</h1>
      </Container>
    );
  }
}
export default TitleSection;

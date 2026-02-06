import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function Generes() {
  return (
    <>
      <Container className="my-4">
        <Row>
          {/* Fist Col */}
          <Col>
            <Row className="d-flex align-items-center gap-3">
              <Col>
                <h1 className=" mb-0 me-3 text-light text-nowrap">TV Shows</h1>
              </Col>
              <Col>
                <Dropdown className=" ">
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Generes
                  </Dropdown.Toggle>
                  <Dropdown.Menu data-bs-theme={"dark"}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          {/* end First Col */}
          {/* Second Col */}
          <Col className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <i className="bi bi-grid icons me-3 border border-1 border-light text-light p-1 px-3"></i>
              <i className="bi bi-grid-3x3 icons border border-1 border-light text-light p-1 px-3"></i>
            </div>
          </Col>
          {/* end Second Col */}
        </Row>
      </Container>
    </>
  );
}
export default Generes;

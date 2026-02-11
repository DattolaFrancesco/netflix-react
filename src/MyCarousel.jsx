import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Toast from "react-bootstrap/Toast";
import { useNavigate } from "react-router-dom";

const MyCarousel = (props) => {
  // state = {
  //   films: [],
  //   loaded: false,
  //   error: "",
  //   toast: true,
  // };
  const [films, setFilms] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(true);

  const navigate = useNavigate();
  const getSaga = () => {
    const link = `http://www.omdbapi.com/?apikey=4315c223&s=${props.saga}`;
    fetch(link)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          switch (res.status) {
            case 400:
              // this.setState({
              //   ...this.state,
              //   error: "errore 400",
              //   toast: false,
              // });
              setError("errore 400");
              setToast(false);
              break;
            case 401:
              // this.setState({
              //   ...this.state,
              //   error: "errore 401",
              //   toast: false,
              // });
              setError("errore 401");
              setToast(false);
              break;
            case 403:
              // this.setState({
              //   ...this.state,
              //   error: "errore 403",
              //   toast: false,
              // });
              setError("errore 403");
              setToast(false);
              break;
            case 404:
              // this.setState({
              //   ...this.state,
              //   error: "errore 404",
              //   toast: false,
              // });
              setError("errore 404");
              setToast(false);
              break;
            default:
              // this.setState({
              //   ...this.state,
              //   error: "riprova",
              //   toast: false,
              // });
              setError("riprova");
              setToast(false);
          }
          return null;
        }
      })
      .then((films) => {
        // this.setState({
        //   films: films.Search,
        //   loaded: true,
        // });
        setFilms(films.Search);
        setLoaded(true);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  const Placeholder = () => {
    const cols = [];
    for (let i = 0; i < 5; i++) {
      const col = (
        <Col key={i}>
          <img
            className="d-block w-100 h-100"
            src="https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bjluanAxNGNrMW44cmt4anZpMnRhbjhiMXprZG5hYTh6bnFneTU2MiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/6YXmxRMrjKZMLUree4/giphy.webp"
            alt="First slide"
          />
        </Col>
      );
      cols.push(col);
    }
    return cols;
  };
  // componentDidMount() {
  // }
  useEffect(() => {
    getSaga();
  }, []);

  const filmsFirst = films.slice(0, 5);
  const filmsSecond = films.slice(5);
  let arrows = loaded;

  return (
    <Container className="text-center">
      {!loaded && (
        <Carousel interval={null} indicators={false} controls={false}>
          <Carousel.Item>
            <Row className="g-1">{Placeholder()}</Row>
          </Carousel.Item>
        </Carousel>
      )}
      {!toast && (
        <Toast className="position-absolute bottom-0 end-0">
          <Toast.Header className="bg-danger border-0">
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">ERRORE</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body className="bg-dark text-danger fw-bold fs-3">{error}</Toast.Body>
        </Toast>
      )}

      <Carousel interval={null} indicators={false} controls={arrows}>
        <Carousel.Item>
          <Row className="g-1">
            {filmsFirst.map((films, i) => {
              return (
                <Col
                  key={i}
                  onClick={() => {
                    navigate(`/movieId/${films.imdbID}`);
                  }}
                >
                  <img className="d-block w-100 h-100" src={films.Poster} alt="First slide" />
                </Col>
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-1">
            {filmsSecond.map((films, i) => {
              return (
                <Col key={i}>
                  <img className="d-block w-100 h-100" src={films.Poster} alt="First slide" />
                </Col>
              );
            })}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyCarousel;

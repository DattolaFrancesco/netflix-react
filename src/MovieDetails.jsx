import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const locationId = location.pathname.slice(9);
  const [film, SetFilm] = useState(null);
  const [loaded, SetLoaded] = useState(false);

  const getSaga = () => {
    const link = `http://www.omdbapi.com/?apikey=4315c223&i=${locationId}`;
    fetch(link)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("errore caricamento film"); //{
        //   switch (res.status) {
        //     case 400:
        //       // this.setState({
        //       //   ...this.state,
        //       //   error: "errore 400",
        //       //   toast: false,
        //       // });
        //       setError("errore 400");
        //       setToast(false);
        //       break;
        //     case 401:
        //       // this.setState({
        //       //   ...this.state,
        //       //   error: "errore 401",
        //       //   toast: false,
        //       // });
        //       setError("errore 401");
        //       setToast(false);
        //       break;
        //     case 403:
        //       // this.setState({
        //       //   ...this.state,
        //       //   error: "errore 403",
        //       //   toast: false,
        //       // });
        //       setError("errore 403");
        //       setToast(false);
        //       break;
        //     case 404:
        //       // this.setState({
        //       //   ...this.state,
        //       //   error: "errore 404",
        //       //   toast: false,
        //       // });
        //       setError("errore 404");
        //       setToast(false);
        //       break;
        //     default:
        //       // this.setState({
        //       //   ...this.state,
        //       //   error: "riprova",
        //       //   toast: false,
        //       // });
        //       setError("riprova");
        //       setToast(false);
        //   }
        //   return null;
        // }
      })
      .then((films) => {
        console.log(films);
        SetFilm(films);
        SetLoaded(true);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  useEffect(() => {
    getSaga();
  }, []);
  return (
    <>
      {loaded && (
        <Card className="w-25">
          <Card.Img variant="top" src={film.Poster} style={{ width: "100%" }} />
          <Card.Body>
            <Card.Title>{film.Title}</Card.Title>
            <Card.Text>{film.Plot}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MovieDetails;

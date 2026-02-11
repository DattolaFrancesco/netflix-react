import Header from "./MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Generes from "./Generes";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import Tvshows from "./TvShows";
import Errore from "./Errore";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Generes />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/TvShows"} element={<Tvshows />} />
          <Route path={"/movieId/:Id"} element={<MovieDetails />} />
          <Route path={"*"} element={<Errore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

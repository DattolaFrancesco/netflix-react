import Header from "./MyHeader";
import MyCarousel from "./MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Generes from "./Generes";
import TitleSection from "./TitlesSection";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Generes />
      <div className="mb-custom">
        <TitleSection title={"Harry Potter"} />
        <MyCarousel saga={"Harry Potter"} />
        <TitleSection title={"Star Wars"} />
        <MyCarousel saga={"Star Wars"} />
        <TitleSection title={"Fast"} />
        <MyCarousel saga={"Fast"} />
      </div>
      <Footer />
    </>
  );
}

export default App;

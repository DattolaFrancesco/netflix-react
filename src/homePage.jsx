import MyCarousel from "./MyCarousel";
import TitleSection from "./TitlesSection";
const HomePage = () => {
  return (
    <div className="mb-custom">
      <TitleSection title={"Harry Potter"} />
      <MyCarousel saga={"Harry Potter"} />
      <TitleSection title={"Star Wars"} />
      <MyCarousel saga={"Star Wars"} />
      <TitleSection title={"Fast"} />
      <MyCarousel saga={"Fast"} />
    </div>
  );
};
export default HomePage;

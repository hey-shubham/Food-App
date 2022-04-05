import Body from "../../body/Body";
import Category from "../../category/Category";
import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Category />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;

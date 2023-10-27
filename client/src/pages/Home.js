import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import "./pages_css.scss";
import MailList from "../components/mailList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

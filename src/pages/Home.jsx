import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>Subtitle</p>

      <Button buttonStyle="primary" arrow>
        {" "}
        Olá
      </Button>
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import ProjectsList from "../components/ProjectsList/ProjectsList";

export default function Home() {
  return (
    <>
      <Header />

      <div className="container">
        <h1>Home</h1>
        <p>Subtitle</p>

        <Button buttonStyle="primary" arrow>
          {" "}
          Olá
        </Button>
        <ProjectsList />

        <Hero />
      </div>
      <Footer />
    </>
  );
}

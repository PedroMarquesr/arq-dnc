import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <Banner title="Contact" image="contact.jpg" />
      <div className="container">
        <ContactForm />{" "}
      </div>
      <Footer />
    </>
  );
}

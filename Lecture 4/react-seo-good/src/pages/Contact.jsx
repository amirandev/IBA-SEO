import Seo from '../components/Seo';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with React SEO Project. We are here to help."
        keywords="contact, support, help, react seo"
        path="/contact"
      />

      <h1>Contact Us</h1>

      <section>
        <h2>Get in Touch</h2>
        <address>
          <p>Email: <a href="mailto:info@reactseo.com" title="Send us an email">info@reactseo.com</a></p>
          <p>Phone: <a href="tel:+995555123456" title="Call us">+995 555 123 456</a></p>
          <p>Address: Tbilisi, Georgia</p>
        </address>
      </section>
    </>
  );
}

import Seo from '../components/Seo';

export default function About() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'React SEO Project',
    url: 'https://myproject.byethost.com',
    description: 'We build SEO-friendly React applications.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+995-555-123-456',
      contactType: 'Customer Service'
    }
  };

  return (
    <>
      <Seo
        title="About Us"
        description="Learn about React SEO Project — our mission, team, and values."
        keywords="about, company, mission, team, react seo"
        path="/about"
      />

      <h1>About Us</h1>
      <p>We are a team of frontend developers passionate about building fast, accessible, and SEO-friendly web applications.</p>

      <section>
        <h2>Our Mission</h2>
        <p>To help developers understand that SEO is not just a marketing concern — it starts with the code you write.</p>
      </section>

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

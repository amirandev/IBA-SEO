import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 — Page Not Found"
        description="The page you are looking for does not exist. Return to homepage."
        keywords="404, page not found, error"
        path="/404"
      />

      <h1>404 — Page Not Found</h1>
      <p>The page you are looking for might have been removed, renamed, or is temporarily unavailable.</p>

      <nav aria-label="Error page navigation">
        <Link to="/" title="Return to homepage">Return to Homepage</Link>
        {' | '}
        <Link to="/sitemap" title="View site map">View Site Map</Link>
      </nav>
    </>
  );
}

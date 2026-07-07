import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  const breadcrumbItems = [
    { position: 1, name: 'Home', url: '/' },
    ...pathnames.map((name, index) => ({
      position: index + 2,
      name: name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      url: `/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: `https://myproject.byethost.com${item.url}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <li key={item.url}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.url} title={`Go to ${item.name}`}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </nav>
  );
}

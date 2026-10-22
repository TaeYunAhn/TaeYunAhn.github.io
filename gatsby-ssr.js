const React = require('react');
const { aboutSeo, description } = require('./gatsby-meta-config');

// Gatsby 3's concurrent Material UI renderer can mix Helmet metadata between
// pages. Keep the existing home and the updated About metadata route-specific.
function pageSeo(pathname) {
  if (pathname === '/about/' || pathname === '/about') return aboutSeo;
  if (pathname === '/') return { title: 'Home', description, language: 'en' };
  return null;
}

exports.onRenderBody = ({ pathname, setHtmlAttributes }) => {
  const seo = pageSeo(pathname);
  if (seo) setHtmlAttributes({ lang: seo.language });
};

exports.onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  const seo = pageSeo(pathname);
  if (!seo) return;
  const fields = ['description', 'og:title', 'og:site_title', 'og:description'];
  const head = getHeadComponents()
    .flat(Infinity)
    .filter((element) => {
      if (!element) return false;
      const props = element.props || {};
      return element.type !== 'title' && !fields.includes(props.name || props.property);
    });
  head.push(
    React.createElement('title', { key: 'page-title', 'data-react-helmet': true }, seo.title),
  );
  fields.forEach((field) =>
    head.push(
      React.createElement('meta', {
        key: field,
        'data-react-helmet': true,
        [field.startsWith('og:') ? 'property' : 'name']: field,
        content: field.includes('title') ? seo.title : seo.description,
      }),
    ),
  );
  replaceHeadComponents(head);
};

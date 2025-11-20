import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title,
  description,
  keywords,
  image = '/icons/voltera-logo.png',
  url,
  type = 'website'
}: SEOProps) {
  const siteTitle = 'Voltera';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullUrl = url || window.location.href;

  useEffect(() => {
    document.title = fullTitle;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || 'zonnepanelen, thuisbatterij, warmtepomp, energiebesparing' },

      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: siteTitle },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value!);
        document.head.appendChild(element);
      }

      element.content = content;
    });
  }, [fullTitle, description, keywords, image, fullUrl, type]);

  return null;
}

const title = 'Will Kim';
const description = 'Front-end developer';

const SEO = {
  title,
  description,
  canonical: 'https://withoutwax.me',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://withoutwax.me',
    title,
    description,
    images: [
      {
        url: 'https://withoutwax.me/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@_withoutwax',
    site: '@_withoutwax',
    cardType: 'summary_large_image'
  }
};

export default SEO;

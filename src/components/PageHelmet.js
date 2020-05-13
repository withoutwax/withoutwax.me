import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// class PageHelmet extends React.Component {
//     <StaticQuery 
//         query={graphql`
//         query HeadingQuery {
//         site {
//             siteMetadata {
//             title
//             description
//             }
//         }
//         }
//     `}
//         render={data => (

//         )}
//     />

//   };
  export default PageHelmet;

//   <Helmet title={title}>
//                     <meta name="viewport" content="width=device-width,initial-scale=1" />

//                     <meta name="description" content={description} />

//                     <meta name="twitter:title" content={title} />
//                     <meta name="twitter:description" content={description} />
//                     <meta name="twitter:creator" content="Will Kim" />
//                     <meta name="twitter:site" content="@_withoutwax" />
//                     <meta name="twitter:url" content={url} />
//                     <meta name="twitter:card" content="summary_large_image" />
//                     <meta
//                     name="twitter:image"
//                     content="/img/og-image.jpg"
//                     />

//                     {/* <meta property="og:locale" content="ko_kR" /> */}
//                     <meta property="og:site_name" content="withoutwax.me" />
//                     <meta property="og:title" title={title} />
//                     <meta property="og:description" content={description} />
//                     <meta property="og:image" content="/img/og-image.jpg" />
//                     <meta property="og:image:type" content="image/png" />
//                     <meta property="og:image:width" content="1200" />
//                     <meta property="og:image:height" content="630" />
//                     <meta property="og:url" content={url} />
//                 </Helmet>
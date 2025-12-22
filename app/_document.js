import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and manifest */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Primary Meta Tags */}
        <meta name="title" content="SRIYOG Consulting | IT Consulting in Kathmandu, Nepal" />
        <meta name="description" content="Welcome to SRIYOG Consulting, your partner in IT solutions." />
        <meta name="keywords" content="SRIYOG Consulting, IT Consulting, IT Solutions, Kathmandu, Nepal" />
        <meta name="author" content="SRIYOG Consulting" />

        {/* Open Graph */}
        <meta property="og:url" content="https://sriyog.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SRIYOG Consulting | IT Consulting in Kathmandu, Nepal" />
        <meta property="og:description" content="Welcome to SRIYOG Consulting, your partner in IT solutions." />
        <meta property="og:image" content="https://sriyog.com/images/og/default.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="sriyog.com" />
        <meta property="twitter:url" content="https://sriyog.com" />
        <meta name="twitter:title" content="SRIYOG Consulting | IT Consulting in Kathmandu, Nepal" />
        <meta name="twitter:description" content="Welcome to SRIYOG Consulting, your partner in IT solutions." />
        <meta name="twitter:image" content="https://sriyog.com/images/og/default.jpg" />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

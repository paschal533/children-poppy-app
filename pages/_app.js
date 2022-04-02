import React from 'react';
import Script from 'next/script';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-2242621108621804"
        async="true"
        strategy="beforeInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
       <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

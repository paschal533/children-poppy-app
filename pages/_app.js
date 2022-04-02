import React from 'react';
import Script from 'next/script';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
       <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

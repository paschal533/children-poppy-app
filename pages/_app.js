import React from 'react';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      {/* <Script>{ function(s, u, z, p) { s.src = u, s.setAttribute('data-zone', z), p.appendChild(s) }, document.createElement('script'), 'https://iclickcdn.com/tag.min.js', 4817751, document.body || document.documentElement }</Script> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

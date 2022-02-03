import { Html, Main, NextScript, Head } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> 
        <script dangerouslySetInnerHTML={{
        __html: `
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-2242621108621804",
            enable_page_level_ads: true
            });
            `,
            }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;

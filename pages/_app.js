import React from 'react';
import Script from 'next/script';
import { NextSeo } from "next-seo";
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextSeo
        title="Children's Poppy | A blog website for parents, teachers, children, caregivers, and all who have had a childhood experience"
        description="Read our weekly updates about children's development and how to help them grow properly, be aware of how your childhood experiences affect your lifestyle"
        defaultTitle="Children's Poppy | A blog website for parents, teachers, children, caregivers, and all who have had a childhood experience"
        canonical="https://www.childrenspoppy.com/"
        openGraph={{
          url: "https://www.childrenspoppy.com/",
          title: "Children's Poppy | A blog website for parents, teachers, children, caregivers, and all who have had a childhood experience",
          description:
            "Read our weekly updates about children's development and how to help them grow properly, be aware of how your childhood experiences affect your lifestyle",
          images: [
              {
                url: "https://i.ibb.co/TvBCbb2/image-removebg-preview.png",
                width: 1280,
                height: 720,
                alt: "Children's Poppy | A blog website for parents, teachers, children, caregivers, and all who have had a childhood experience",
              },
            ],
          }}
          twitter={{
            cardType: "summary_large_image",
          }}
          additionalMetaTags={[
            {
              property: "keywords",
              content:
                "children, kids, parents, movies, books, cartoons, caregiver, development, classroom, teachers, childhood, child's needs",
            },
          ]}
      />
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

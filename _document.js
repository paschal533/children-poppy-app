import { Html, Main, NextScript, Head } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
        <title>childrens poppy</title>
        <meta name="description" content="Everything you need to know about childrens nature and nurture" />
      </Head>
      <Head>
        <meta name="keywords" content="children, development, growth, nurture, education, parent, teacher, care-giver, early childhood, play," />
      </Head>
      <Head>
        <meta name="author" content="Kosi Okwuosah" />
      </Head>
      <Head>
        <meta name="propeller" content="32ee0889395e657be2e78ce0e8f15d12" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;

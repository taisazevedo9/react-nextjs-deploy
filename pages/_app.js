import Head from 'next/head';
import GlobalStyle from "../theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+AR:wght@100..400&display=swap" rel="stylesheet"/>
      </Head>


      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;

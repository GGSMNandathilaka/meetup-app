import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
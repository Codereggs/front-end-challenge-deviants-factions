import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../assets/theme/chakratheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Deviant Factions Card Game</title>
        <meta name="Deviant Factions" content="NFT Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

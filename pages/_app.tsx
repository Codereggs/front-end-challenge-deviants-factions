import Head from "next/head";
/*Redux */
import { Provider } from "react-redux";
import { store } from "src/app/store";
/*Chakra UI Theme */
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../assets/theme/chakratheme";
/*Styles*/
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Deviant Factions Card Game</title>
        <meta name="Deviant Factions" content="NFT Card Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;

import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardSectionBody from "@components/CardSectionBody";
import Filters from "@components/Filters";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Home() {
  return (
    <>
      <Box h="100vh">
        <Grid
          minH="100%"
          templateColumns="repeat(6, 1fr)"
          templateRows={[
            "50px 80px repeat(3, 1fr) 80px",
            "80px 80px repeat(3, 1fr) 80px",
            ,
            "80px 80px repeat(3, 1fr) 80px",
            ,
            "80px  repeat(4, 1fr) 80px",
          ]}
          gridAutoRows="minmax(1fr, auto)"
        >
          <Header />
          <Filters />
          <CardSectionBody />
          <Footer />
        </Grid>
      </Box>
    </>
  );
}

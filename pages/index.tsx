import { Box, Grid, GridItem } from "@chakra-ui/react";
import CardSectionBody from "@components/ui/organisms/CardSectionBody";
import Filters from "@components/ui/organisms/Filters";
import Footer from "@components/ui/organisms/Footer";
import Header from "@components/ui/organisms/Header";

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
            "50px  repeat(4, 1fr) 80px",
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

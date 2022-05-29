import React from "react";
import Router from "next/router";
import { Button, Box, Text } from "@chakra-ui/react";

const PageError: React.FC = () => (
  <Box
    display="flex"
    flexDir="column"
    textAlign="center"
    height="100vh"
    width="100vw"
    justifyContent="center"
    alignItems="center"
    bg="blackAlpha.800"
    color="whiteAlpha.900"
  >
    <Text fontSize="3.75rem">Oops. This page not exist.</Text>
    <Button
      color="primary"
      fontSize={30}
      onClick={() => Router.push("/")}
      m={2}
    >
      Go Back
    </Button>
  </Box>
);

export default PageError;

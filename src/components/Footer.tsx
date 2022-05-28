import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <GridItem
      bg="tomato"
      alignItems="center"
      justifyContent="center"
      display="flex"
      gridArea={["6/1/7/7", "6/1/7/7", "6/1/7/7", "7 / 1 / 8 / 7"]}
    >
      <Box w="100%" textAlign="center">
        <Text>A challenge made by Codereggs with ❤️</Text>
      </Box>
    </GridItem>
  );
};

export default Footer;

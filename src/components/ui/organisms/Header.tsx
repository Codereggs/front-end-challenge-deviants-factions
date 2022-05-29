import { Box, Flex, GridItem, Image, Link, Show } from "@chakra-ui/react";
import React from "react";
import SearchInput from "../atoms/SearchInput";

const Header: React.FC = () => {
  return (
    <GridItem gridArea={["1 / 1 / 2 / 7"]} bg="secondary">
      <Flex align="center" justifyContent="space-between" px={5}>
        <Link
          href="https://deviantsfactions.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/logo.png" alt="logo" width={["100px", "200px"]}></Image>
        </Link>
        <Show breakpoint="(min-width: 767px)">
          <SearchInput />
        </Show>
      </Flex>
    </GridItem>
  );
};

export default Header;

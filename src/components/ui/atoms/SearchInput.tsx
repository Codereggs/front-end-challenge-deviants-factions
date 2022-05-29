import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useEffect } from "react";
import { useAppDispatch } from "src/app/store";
import { isFiltered, searchCards } from "src/features/counter/cardsSlice";

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const searchFilterCard = (event) => {
    if (event.target.value.length > 0) {
      dispatch(searchCards(event.target.value));
      dispatch(isFiltered(true));
    } else dispatch(isFiltered(false));
  };

  useEffect(() => {
    dispatch(isFiltered(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputGroup placeholder="Search" size="sm" w="300px" borderColor="#ffa500">
      <Input
        onChange={debounce(searchFilterCard, 500)}
        placeholder="Search card name"
        color="white"
        _placeholder={{ color: "white" }}
        _hover={{ color: "#ffa500", boxShadow: "0px 0px 5px 1px #ffa500" }}
        _focus={{ color: "#ffa500", boxShadow: "0px 0px 5px 1px #ffa500" }}
      />
      <InputRightElement>
        <Button
          size="sm"
          borderRadius="0"
          bg="orange"
          color="white"
          _hover={{ color: "white", boxShadow: "0px 0px 5px 1px #ffa500" }}
        >
          <SearchIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;

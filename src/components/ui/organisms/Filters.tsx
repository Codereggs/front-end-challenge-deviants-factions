import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  GridItem,
  Stack,
  Text,
  useCheckboxGroup,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/store";
import { filterCards, isFiltered } from "src/features/counter/cardsSlice";
import CustomAccordion from "src/hook/CustomAccordion";

const Filters: React.FC = () => {
  const { loading, data } = useSelector(
    (state: RootState) => state.cards.cards
  );
  const { value, getCheckboxProps } = useCheckboxGroup();
  const dispatch = useDispatch();

  useEffect(() => {
    if (value.length > 0) {
      dispatch(isFiltered(true));
      dispatch(filterCards(value));
    } else dispatch(isFiltered(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <GridItem
      bg="secondary"
      color="primaryText"
      gridArea={[
        "2 / 1 / 3 / 7",
        "2 / 1 / 3 / 7",
        "2 / 1 / 3 / 7",
        "2 / 1 / 7 / 2",
      ]}
      minH="100%"
    >
      <Box p={3}>
        <CustomAccordion>
          <Text
            fontSize={["xl", "xl", "2xl", "2xl"]}
            color="orange"
            textShadow="0px 0px 4px  #ffa500"
            flex="1"
            textAlign="left"
          >
            Filters
          </Text>
          <Flex flexDirection={["column", "column", "column", "column"]}>
            <Box px={5} pb={2}>
              <Text fontSize={["lg", "xl", "xl", "2xl"]}>Card Type</Text>
              <CheckboxGroup colorScheme="orange">
                <Stack spacing={"2"} direction={"column"}>
                  <Checkbox value="character" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Character
                    </Text>
                  </Checkbox>
                  <Checkbox value="technology" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Technology
                    </Text>
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>

            <Box px={5} pb={2}>
              <Text fontSize={["lg", "xl", "xl", "2xl"]}>Factions</Text>
              <CheckboxGroup colorScheme="orange">
                <Stack spacing={"2"} direction={"column"}>
                  <Checkbox value="awaken" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Awaken
                    </Text>
                  </Checkbox>
                  <Checkbox value="entropy" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18pxx"]}>
                      Entropy
                    </Text>
                  </Checkbox>
                  <Checkbox value="inhuman" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Inhuman
                    </Text>
                  </Checkbox>
                  <Checkbox value="owner" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Owner
                    </Text>
                  </Checkbox>
                  <Checkbox value="undeviant" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Undeviant
                    </Text>
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
            <Box px={5} pb={2}>
              <Text fontSize={["lg", "xl", "xl", "2xl"]}>Rarity</Text>
              <CheckboxGroup colorScheme="orange">
                <Stack spacing={"2"} direction={"column"}>
                  <Checkbox value="legendary" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Legendary
                    </Text>
                  </Checkbox>
                  <Checkbox value="rare" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Rare
                    </Text>
                  </Checkbox>
                  <Checkbox value="uncommon" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Uncommon
                    </Text>
                  </Checkbox>
                  <Checkbox value="common" {...getCheckboxProps()}>
                    <Text fontSize={["12px", "14px", "18px", "18px"]}>
                      Common
                    </Text>
                  </Checkbox>
                </Stack>
              </CheckboxGroup>
            </Box>
          </Flex>
        </CustomAccordion>
      </Box>
    </GridItem>
  );
};

export default Filters;

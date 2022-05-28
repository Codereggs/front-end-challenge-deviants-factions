import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/app/store";
import { getAllCards } from "src/features/counter/cardsSlice";

const CardSectionBody: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, charType, hqType, technoType, filtered, filteredData } =
    useSelector((state: RootState) => state.cards.cards);

  const renderTypesCards = (arr: any[]) => {
    return (
      <Grid
        templateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={0}
        display="grid"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
      >
        {arr.length > 0 &&
          arr.map((card: any) => (
            <GridItem key={card.id} w="100%">
              <Box p={2}>
                <Image
                  alt={card.Name + card.id}
                  src={`https://deviants-factions.mo.cloudinary.net/cards/${
                    card.id
                  }.${
                    card.Rarity === "Common" || card.CardType === "HQ"
                      ? "png"
                      : "gif"
                  }?tx=h_600,q_80,f_auto`}
                />
              </Box>
            </GridItem>
          ))}
      </Grid>
    );
  };

  useEffect(() => {
    dispatch(getAllCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GridItem
        bg="papayawhip"
        textAlign="center"
        fontSize="2xl"
        p={10}
        gridArea={[
          "3 / 1 / 6 / 7",
          "3 / 1 / 6 / 7",
          "3 / 1 / 6 / 7",
          "2 / 2 / 7 / 7",
        ]}
      >
        {filtered ? (
          <>
            <Text my={3} fontSize="3xl" fontFamily="body">
              Filtered Cards
            </Text>
            <Box borderRadius="20px" bg="secondary" p={3}>
              {renderTypesCards(filteredData)}
            </Box>
          </>
        ) : (
          <Accordion allowToggle allowMultiple /* defaultIndex={0} */>
            {hqType.length > 0 && (
              <>
                <AccordionItem
                  bg="secondary"
                  color="primaryText"
                  borderRadius="10px"
                >
                  <AccordionButton disabled={loading}>
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      fontFamily="body"
                    >
                      HQ Cards
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Box borderRadius="20px" bg="secondary">
                      {renderTypesCards(hqType)}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </>
            )}

            {charType.length > 0 && (
              <>
                <AccordionItem
                  bg="secondary"
                  color="primaryText"
                  borderRadius="10px"
                >
                  <AccordionButton disabled={loading}>
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      fontFamily="body"
                    >
                      Character Cards
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Box borderRadius="20px" bg="secondary" p={3}>
                      {renderTypesCards(charType)}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </>
            )}

            {technoType.length > 0 && (
              <>
                <AccordionItem
                  bg="secondary"
                  color="primaryText"
                  borderRadius="10px"
                >
                  <AccordionButton disabled={loading}>
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      fontFamily="body"
                    >
                      Technologies Cards
                    </Text>
                  </AccordionButton>
                  <AccordionPanel>
                    <Box borderRadius="20px" bg="secondary" p={3}>
                      {renderTypesCards(technoType)}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </>
            )}
          </Accordion>
        )}
      </GridItem>
    </>
  );
};

export default CardSectionBody;

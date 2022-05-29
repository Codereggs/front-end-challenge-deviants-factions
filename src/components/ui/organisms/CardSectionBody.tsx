import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { styleHover } from "assets/theme/chakratheme";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "src/app/store";
import { getAllCards } from "src/features/counter/cardsSlice";
import ModalCards from "../molecules/ModalCards";

const CardSectionBody: React.FC = () => {
  const dispatch = useAppDispatch();

  const { loading, charType, hqType, technoType, filtered, filteredData } =
    useSelector((state: RootState) => state.cards.cards);

  const [openModal, setOpenModal] = useState<any>({ open: false, data: {} });

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
        {arr.length > 0 ? (
          arr.map((card: any) => (
            <GridItem key={card.id} w="100%">
              <Box p={2}>
                <Image
                  loading="lazy"
                  alt={card.Name + card.id}
                  src={`https://deviants-factions.mo.cloudinary.net/cards/${
                    card.id
                  }.${
                    card.Rarity === "Common" || card.CardType === "HQ"
                      ? "png"
                      : "gif"
                  }?tx=h_600,q_80,f_auto`}
                  onClick={(e) => setOpenModal({ open: true, data: e.target })}
                  _hover={{ transform: "scale(1.1)", transition: "1s ease" }}
                />
              </Box>
            </GridItem>
          ))
        ) : (
          <GridItem w="100%" gridArea="1/1/1/5">
            <Box p={2} textAlign="center" w="100%">
              <Text color="white">Card not found</Text>
            </Box>
          </GridItem>
        )}
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
        bg="primary"
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
            <Text
              my={3}
              fontSize="3xl"
              fontFamily="body"
              letterSpacing="auto"
              color="primaryText"
            >
              Filtered Cards
            </Text>
            <Box borderRadius="20px" bg="secondary" p={3}>
              {renderTypesCards(filteredData)}
            </Box>
          </>
        ) : (
          <Accordion allowToggle allowMultiple defaultIndex={0}>
            {hqType.length > 0 && (
              <>
                <AccordionItem
                  bg="secondary"
                  color="primaryText"
                  borderRadius="10px"
                  mb={5}
                >
                  <AccordionButton
                    disabled={loading}
                    _hover={styleHover}
                    _focus={styleHover}
                  >
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      flex="1"
                      textAlign="left"
                      letterSpacing="auto"
                    >
                      HQ Cards
                    </Text>
                    <AccordionIcon color="white" />
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
                  mb={5}
                >
                  <AccordionButton
                    disabled={loading}
                    _hover={styleHover}
                    _focus={styleHover}
                  >
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      flex="1"
                      textAlign="left"
                      letterSpacing="auto"
                    >
                      Character Cards
                    </Text>
                    <AccordionIcon color="white" />
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
                  mb={5}
                >
                  <AccordionButton
                    disabled={loading}
                    _hover={styleHover}
                    _focus={styleHover}
                  >
                    <Text
                      my={3}
                      fontSize={["xl", "xl", "2xl", "3xl"]}
                      flex="1"
                      textAlign="left"
                      letterSpacing="auto"
                    >
                      Technologies Cards
                    </Text>
                    <AccordionIcon color="white" />
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
      <ModalCards openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default CardSectionBody;

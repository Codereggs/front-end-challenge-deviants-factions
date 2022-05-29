import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Show,
} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React from "react";

const CustomAccordion: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Show breakpoint="(max-width: 780px)">
        <Accordion allowToggle bg="primary" position="relative" zIndex="1">
          <AccordionItem>
            <AccordionButton>
              {children[0]}
              <AccordionIcon color="white" />
            </AccordionButton>
            <AccordionPanel>
              {children.map((child, index) => {
                if (index === 0) return;
                return child;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Show>
      <Show breakpoint="(min-width: 781px)">{children}</Show>
    </>
  );
};

export default CustomAccordion;

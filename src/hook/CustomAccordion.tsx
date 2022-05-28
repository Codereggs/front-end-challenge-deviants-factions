import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import React, { useEffect, useState } from "react";

const CustomAccordion: React.FC<Props> = ({ children }) => {
  const [notComputer, setNotComputer] = useState<boolean>();
  let windowW = () => {
    if (window.outerWidth < 770) return setNotComputer(true);
    else return setNotComputer(false);
  };
  useEffect(() => {
    windowW();
    window.addEventListener("resize", windowW);
  }, []);

  return (
    <>
      {notComputer ? (
        <Accordion allowToggle bg="tomato" position="relative" zIndex="1">
          <AccordionItem>
            <AccordionButton>{children[0]}</AccordionButton>
            <AccordionPanel>
              {children.map((child, index) => {
                if (index === 0) return;
                return child;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        children
      )}
    </>
  );
};

export default CustomAccordion;

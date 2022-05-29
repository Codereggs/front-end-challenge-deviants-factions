import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  openModal: any;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean | any>>;
}

const ModalCards: React.FC<Props> = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal
        isCentered
        size="full"
        isOpen={openModal?.open}
        onClose={() => setOpenModal({ open: false })}
        scrollBehavior={"inside"}
      >
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent
          bg="primary"
          color="primaryText"
          fontFamily="body"
          border="2px solid #363636"
        >
          <ModalHeader textAlign="center" bg="secondary">
            {openModal?.data?.alt}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Image
              margin="auto"
              src={openModal?.data?.src}
              alt={openModal?.data?.alt}
              width={openModal?.data?.width + 200}
              height={openModal?.data?.height + 200}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCards;

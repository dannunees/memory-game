import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";


const BoxContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: stretch;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00001480;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 460px;
  height: 400px;
  background: #000014;
  position: relative;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalText = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom: 30px;
  text-align: center;
`;

const ModalButton = styled.div`
  background: #8958ff;
  color: white;
  width: 312px;
  height: 46px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  
  &:hover {
    background: #6a3edb;
  }
`;

const App = () => {
  const [linksCard, setLinksCard] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setLinksCard([]);
  };

  const handleAddLink = (src) => {
    if (linksCard.length < 2) {
      setLinksCard((prevLinks) => [...prevLinks, src]);
    } else {
      console.log("Limite máximo de 2 itens atingido.");
    }
  };

  const toggleActive = (src) => {
    setActiveCards((prevState) => ({
      ...prevState,
      [src]: !prevState[src],
    }));
  };

  useEffect(() => {
    if (linksCard.length === 2) {
      if (linksCard[0] !== linksCard[1]) {
        console.log("Itens diferentes");
        setShowModal(true);
      } else {
        console.log("Itens iguais");
      }
    }
  }, [linksCard]);

  return (
    <>
      {showModal && (
        <Modal>
          <ModalContent>
            <ModalText>Você errou!</ModalText>
            <ModalButton onClick={closeModal}>Jogar novamente</ModalButton>
          </ModalContent>
        </Modal>
      )}

      <BoxContainer>
        <Card src="public/assets/icon-1.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-2.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-3.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-4.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-5.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-6.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-7.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-8.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-9.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-1.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-2.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-3.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-4.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-5.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-6.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-7.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-8.png" addLink={handleAddLink} toggleActive={toggleActive} />
        <Card src="public/assets/icon-9.png" addLink={handleAddLink} toggleActive={toggleActive} />
      </BoxContainer>

    </>
  );
};

export default App;

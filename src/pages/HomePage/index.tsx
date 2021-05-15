import React from "react";
import Gallery from "../../Components/Gallery";
import Header from "../../Components/Header";

import { Container } from "./styles";

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <Header>SnapCam</Header>

        <Gallery />
      </Container>
    </>
  );
};

export default HomePage;

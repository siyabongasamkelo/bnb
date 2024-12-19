import React from "react";
import { HomeContainer, HomeWrapper } from "./Home.styled";
import { Container } from "react-bootstrap";
import Header from "./common/Header";

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <HomeContainer>
          <Header />
        </HomeContainer>
      </Container>
    </HomeWrapper>
  );
};

export default Home;

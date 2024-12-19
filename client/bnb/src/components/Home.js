import React from "react";
import {
  HomeContainer,
  HomeContent,
  HomeWrapper,
  LeftContent,
  MiddleContent,
  RightContent,
} from "./Home.styled";
import { Container } from "react-bootstrap";
import Header from "./common/Header";
import {
  CaretUpFill,
  CaretDownFill,
  Instagram,
  Whatsapp,
  TwitterX,
  Facebook,
} from "react-bootstrap-icons";
import Button from "./common/Button";
import bnb from "./../assets/img/aboutpic.jpg";
const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <HomeContainer>
          <Header />
          <HomeContent>
            <LeftContent>
              <div className="up">
                <CaretUpFill />
              </div>
              <div className="down">
                <CaretDownFill />
              </div>
            </LeftContent>
            <MiddleContent>
              <div className="left">
                <h1>Duswa Guest House</h1>
                <p>
                  Need a place to forget about all your stress and your
                  problems,<br></br> You kno what to do...
                </p>
                <Button>Book Now</Button>
                <div className="pick-date">
                  <div className="pick">
                    <div>
                      <p>Date</p>
                      <input type="date" />
                    </div>
                    <div>
                      <p>Time</p>
                      <input type="time" />
                    </div>
                    <div>
                      <p>Budget</p>
                      <input type="number" />
                    </div>
                  </div>
                  <Button>Submit</Button>
                  <div className="deco"></div>
                  <div className="deco2"></div>
                </div>
              </div>
              <div className="right">
                <img src={bnb} alt="bnb houses" />
                <div className="pic-info">
                  <p>4 bedrooms</p>
                  <h3>R 400.00</h3>
                  <p>25% off</p>
                </div>
                <div className="deco3"></div>
                <div className="icons">
                  <Facebook />
                  <Instagram />
                  <Whatsapp />
                  <TwitterX />
                </div>
              </div>
            </MiddleContent>
            <RightContent></RightContent>
          </HomeContent>
        </HomeContainer>
      </Container>
    </HomeWrapper>
  );
};

export default Home;

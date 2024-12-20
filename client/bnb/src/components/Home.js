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
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./common/Button";
import bnb from "./../assets/img/aboutpic.jpg";
import house from "./../assets/img/house.jpg";
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [bnb, house];

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = (direction) => {
    if (direction === "forward") {
      setCurrentImage((currentImage + 1) % images.length);
    }

    if (direction === "backward") {
      if (currentImage === 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage((currentImage - 1) % images.length);
      }
    }
  };

  return (
    <HomeWrapper>
      <Container>
        <HomeContainer>
          <Header />
          <HomeContent>
            <LeftContent>
              <div
                className="up"
                onClick={() => {
                  handleClick("forward");
                }}
              >
                <CaretUpFill />
              </div>
              <div
                className="down"
                onClick={() => {
                  handleClick("backward");
                }}
              >
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
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={variants}
                  key={currentImage}
                >
                  <img src={images[currentImage]} alt="bnb houses" />
                </motion.div>
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

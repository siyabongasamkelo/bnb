import React from "react";
import {
  AboutLeft,
  AboutRight,
  AboutUsContainer,
  AboutUsWrapper,
  Imagecontainer1,
  Imagecontainer2,
} from "./AboutUs.styled";
import { Container } from "react-bootstrap";
import house from "./../assets/img/house.jpg";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Container>
        <AboutUsContainer>
          <AboutLeft>
            <Imagecontainer1>
              <img src={house} alt="benefits" />
              <div className="deco1"></div>
              <div className="deco2"></div>
            </Imagecontainer1>
            <Imagecontainer2>
              <img src={house} alt="benefits" />
            </Imagecontainer2>
          </AboutLeft>
          <AboutRight>
            <div className="text-div">
              <h2>Welcome to Duswa Guest House</h2>
              <p>
                Your Affordable Escape in Empangeni! Nestled in the heart of
                Mhlathuze, Empangeni, Duswa Guest House is where comfort meets
                affordability. Whether you're traveling for business or leisure,
                we are dedicated to providing you with a warm, relaxing stay
                that won’t break the bank. At Duswa Guest House, we believe that
                luxury isn’t about the price tag—it’s about the experience.
                That’s why we’ve created an inviting space that offers cozy,
                <br></br>
                <br></br>
                well-appointed rooms, friendly service, and a peaceful
                atmosphere, all at an unbeatable value. Located in beautiful
                KwaZulu-Natal, our guest house puts you close to local
                attractions, cultural hotspots, and stunning landscapes that
                make this region so special. Whether you're exploring
                Empangeni’s rich history or simply unwinding after a busy day,
                Duswa Guest House is the perfect home away from home. Come
                experience affordable excellence with us—we can’t wait to
                welcome you! 😊
              </p>
            </div>
          </AboutRight>
        </AboutUsContainer>
      </Container>
    </AboutUsWrapper>
  );
};

export default AboutUs;

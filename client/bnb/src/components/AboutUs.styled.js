import styled from "styled-components";

export const AboutUsWrapper = styled.section`
  height: 100vh;
  min-height: 100vh;
  height: auto;
  width: 100%;

  background: rgb(255, 222, 86);
  background: radial-gradient(
    circle,
    rgba(255, 222, 86, 1) 42%,
    rgba(190, 126, 187, 0.9164040616246498) 100%
  );
`;

export const AboutUsContainer = styled.div`
  height: 90vh;
  padding-top: 10vh;
  min-height: 90vh;
  height: auto;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-top: 25vh;
  }
`;

export const AboutLeft = styled.div`
  height: 100%;
  width: 50%;
  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 100%;
  }
`;

export const AboutRight = styled.div`
  height: 100%;
  width: 50%;
  .text-div {
    width: 65%;
  }
  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 100%;
    padding-top: 20%;

    .text-div {
      width: 90%;
      margin-left: 5%;
      h2 {
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
  }
`;

export const Imagecontainer1 = styled.div`
  height: 40%;
  width: 70%;
  margin-left: -10%;

  background: rgba(255, 255, 255, 0.32);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  img {
    height: 95%;
    width: 95%;
    border-radius: 16px;
    margin-top: 2.5%;
    margin-left: 2.5%;
  }

  .deco1 {
    height: 150px;
    width: 150px;
    margin-left: -15%;
    margin-top: -87%;
    position: absolute;
    z-index: 2;

    background: rgba(255, 255, 255, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .deco2 {
    height: 120px;
    width: 150px;
    margin-left: 80%;
    margin-top: -12%;
    position: absolute;
    z-index: 2;

    background: rgba(255, 255, 255, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 600px) {
    margin-left: 15%;

    .deco1 {
      height: 90px;
      width: 90px;
      margin-left: -17%;
      margin-top: -78%;
    }
    .deco2 {
      height: 90px;
      width: 90px;
      margin-top: -19%;
    }
  }
`;

export const Imagecontainer2 = styled.div`
  height: 30%;
  width: 55%;
  margin-left: 20%;
  margin-top: 5%;

  background: rgba(255, 255, 255, 0.32);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  img {
    height: 95%;
    width: 95%;
    border-radius: 16px;
    margin-top: 2.5%;
    margin-left: 2.5%;
  }

  @media only screen and (max-width: 600px) {
    height: 20%;
    width: 35%;

    margin-left: 47%;
  }
`;

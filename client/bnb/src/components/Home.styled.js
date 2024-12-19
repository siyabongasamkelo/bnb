import styled from "styled-components";

export const HomeWrapper = styled.section`
  height: 100vh;
  width: 100%;
  background: rgb(255, 222, 86);
  background: radial-gradient(
    circle,
    rgba(255, 222, 86, 1) 42%,
    rgba(190, 126, 187, 0.9164040616246498) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContainer = styled.div`
  height: 80vh;
  width: 110%;
  margin-left: -5%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);

  /* From https://css.glass */
  /* background: rgba(255, 255, 255, 0.32);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 0.3); */
`;

export const HomeContent = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
`;

export const LeftContent = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 50px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 1);
      box-shadow: 0 5px 15px rgb(255, 247, 209);
    }

    svg {
      transform: scale(160%);
    }
  }

  .up {
    margin-bottom: 25%;
  }
  .down {
    margin-top: 25%;
  }
`;

export const MiddleContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  .left {
    height: 100%;
    width: 80%;
    h1 {
      // <uniquifier>: Use a unique and descriptive class name
      // <weight>: Use a value from 400 to 700
      color: rgb(86, 58, 156);

      font-family: "DynaPuff", serif;
      font-optical-sizing: auto;
      font-style: normal;
      font-variation-settings: "wdth" 100;
      font-size: 88px;
    }
    p {
      // <uniquifier>: Use a unique and descriptive class name
      // <weight>: Use a value from 100 to 900

      font-family: "Sour Gummy", serif;
      font-optical-sizing: auto;
      /* font-weight: <weight>; */
      font-style: normal;
      font-variation-settings: "wdth" 100;

      font-size: 20px;
    }
    .pick-date {
      height: 35%;
      width: 60%;
      margin-top: 5%;
      position: relative;

      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.2px);
      -webkit-backdrop-filter: blur(5.2px);
      border: 1px solid rgba(255, 255, 255, 0.27);

      .pick {
        height: 50%;
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        display: flex;
        justify-content: space-between;

        div {
          display: flex;
          align-items: center;
          flex-direction: column;
          input {
            color: ${(props) => props.theme.color.text};
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.2px);
            -webkit-backdrop-filter: blur(5.2px);
            border: 1px solid rgba(255, 255, 255, 0.27);
          }
        }
      }
      button {
        height: 35px;
        width: 90px;
        margin-left: 78%;
        margin-top: 3%;
        color: rgba(255, 255, 255, 0.8);

        background: rgba(139, 93, 255, 0.8);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.2px);
        -webkit-backdrop-filter: blur(5.2px);
        border: 1px solid rgba(255, 255, 255, 0.27);

        &:hover {
          box-shadow: 0 5px 15px rgb(139, 93, 255);
          border: 1px solid rgba(255, 255, 255, 0.27);
        }
      }
      .deco {
        height: 100px;
        width: 100px;
        position: absolute;
        margin-left: -10%;
        margin-top: -5%;

        background: rgba(255, 255, 255, 0.32);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .deco2 {
        height: 70px;
        width: 70px;
        position: absolute;
        margin-top: -38%;
        margin-left: 93%;

        background: rgba(255, 255, 255, 0.32);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    }
  }
  .right {
    height: 100%;
    width: 20%;
    img {
      height: 55%;
      width: 180%;
      border-radius: 16px;
      margin-left: -55%;
      margin-top: 50%;
    }
    .pic-info {
      color: rgba(255, 255, 255, 0.8);
      line-height: 3px;
      position: absolute;
      margin-top: -7%;
      margin-left: -7%;
    }
    .deco3 {
      height: 140px;
      width: 200px;
      position: absolute;
      margin-left: 15%;
      margin-top: -5%;

      background: rgba(255, 255, 255, 0.32);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(7.6px);
      -webkit-backdrop-filter: blur(7.6px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    .icons {
      height: 60px;
      width: 200px;
      margin-top: 20%;
      margin-left: 20%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      background: rgba(255, 255, 255, 0.32);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(7.6px);
      -webkit-backdrop-filter: blur(7.6px);
      border: 1px solid rgba(255, 255, 255, 0.3);

      svg {
        transform: scale(140%);
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.color.tetiary};
        }
      }
    }
  }
`;

export const RightContent = styled.div`
  height: 100%;
  width: 10%;
`;

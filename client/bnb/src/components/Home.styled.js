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
`;

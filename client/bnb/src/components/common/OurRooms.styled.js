import styled from "styled-components";

export const OurRoomsWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background: rgb(255, 222, 86);
  background: radial-gradient(
    circle,
    rgba(255, 222, 86, 1) 42%,
    rgba(190, 126, 187, 0.9164040616246498) 100%
  );
`;

export const OurRoomsCover = styled.div`
  min-height: 90vh;
  width: 90%;
  margin-left: 5%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
`;

export const UpperSection = styled.div`
  height: 10vh;
  width: 100%;
`;

export const MiddleSection = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
`;

export const LeftSection = styled.div`
  height: 90vh;
  width: 20%;
`;

export const RightSection = styled.div`
  height: 90vh;
  width: 80%;
`;

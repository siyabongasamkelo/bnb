import React from "react";
import {
  LeftSection,
  MiddleSection,
  OurRoomsCover,
  OurRoomsWrapper,
  RightSection,
  UpperSection,
} from "./OurRooms.styled";

const OurRooms = () => {
  return (
    <OurRoomsWrapper>
      <OurRoomsCover>
        <MiddleSection>
          <LeftSection></LeftSection>
          <RightSection>
            <UpperSection></UpperSection>
          </RightSection>
        </MiddleSection>
      </OurRoomsCover>
    </OurRoomsWrapper>
  );
};

export default OurRooms;

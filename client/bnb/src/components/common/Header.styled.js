import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  width: 90%;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => props.theme.color.text};
    font-family: "DynaPuff", serif;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: #fff7d1;
    }
  }
`;

export const Links = styled.div`
  margin-left: -15px;
  ul {
    list-style: none;
    display: flex;
  }

  a {
    padding-left: 15px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  }
`;

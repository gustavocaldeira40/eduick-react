import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1%;
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const ContainerIcon = styled.button`
  border: none;
  list-style: none;
  background-color: transparent;
  padding: 2%;
`;

export const ContainerHeader = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  @media only screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  @media only screen and (max-width: 500px) {
    margin-left: 4vw;
  }
`;

export const ImageLogo = styled.img`
  padding: 20px;
`;

export const TextMenu = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Colors from '../../../styles/Colors';

interface TextWelcomeProps {
  isBold?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  justify-content: center;
`;

export const ContainerHeaderGeneral = styled.div`
  height: 64px;
  background-color: ${Colors.primary.backgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerContentsHeader = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextTitleHeader = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const ContainerCardTitle = styled.div`
  width: 70%;
  height: 235px;
  background: #ffffff;
  margin: 3vh 15vw;
  display: flex;
  flex-direction: row;
`;

export const ContainerIconLeft = styled.section`
  position: absolute;
  top: 14vh;
  left: 12vw;
`;

export const ContainerIconRight = styled.section`
  position: absolute;
  top: 14vh;
  right: 20vw;
`;

export const ContainerTexts = styled.div`
  width: 40vw;
  height: 100%;
  margin-left: 5vw;
  padding: 2%;

  flex-direction: column;
`;

export const ContainerWelcome = styled.div`
  width: 7.5vw;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const TextWelcome = styled.p<TextWelcomeProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.isBold ? 'bold ' : 'normal')};
  font-size: 21px;
  line-height: 160%;

  color: #200e64;
`;

export const TextDescription = styled.p`
  width: 450px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  color: #343434;
`;

export const ContainerCards = styled.div`
  overflow: auto;
  overflow-x: hidden;
  width: 70vw;

  margin: 5vh 15vw;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5vh 15vw;
  justify-content: center;
  align-items: center;
`;

export const ContainerDot = styled.div`
  width: 14px;
  height: 14px;
  background: ${Colors.primary.backgroundColor};
  margin: 0 1%;

  border-radius: 50px;
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

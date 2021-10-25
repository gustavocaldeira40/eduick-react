import styled from 'styled-components';

export type TextTitle = {
  color?: any;
  isBold?: boolean;
};

/* Container Generals */

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Contrainer purple */

export const Container = styled.div`
  background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);

  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  order: 1;
`;

/* Container for controls of heade */

export const ContainerHeader = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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
`;

export const ContainerContent = styled.div`
  width: 30%;
  height: 64.5vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContainerTitle = styled.div``;

export const TextTitle = styled.p<TextTitle>`
  width: 334px;

  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-size: 48px;
  line-height: 57px;
  letter-spacing: -0.06em;
  color: ${(props) => (props.color ? props.color : '#ffffff')};
`;

export const TextDescription = styled.p`
  width: 496px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 31px;
  margin: 4% 0;

  color: #ffffff;
`;

export const ImageSheets = styled.img`
  position: absolute;
  right: 10.7vw;
`;

export const ContainerAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  width: 382px;
  height: 763px;
  background: linear-gradient(180deg, rgba(255, 234, 164, 0) 3.65%, #ffeaa4 100%);
`;

export const ImageScreen = styled.img`
  position: absolute;
  top: 15vh;
  left: 13.5vw;
  width: auto;
  height: 80vh;
`;

export const ContainerFooter = styled.div`
  width: auto;
  height: 29vh;

  order: 2;

  background: #200e64;
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
`;

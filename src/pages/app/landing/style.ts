import styled from 'styled-components';

export type TextTitle = {
  color?: any;
  isBold?: boolean;
};

export const ContainerGeneral = styled.div``;

export const Container = styled.div`
  background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);

  align-items: center;
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  order: 1;
`;

export const ContainerContent = styled.div`
  width: 30vw;
  margin-left: 40vw;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%;
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

export const ContainerInput = styled.div`
  width: 100%;
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

export const ContainerAction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const ContainerDetailsLeft = styled.div`
  position: absolute;
  right: 0;
  top: 20vh;
  bottom: 20vh;
  left: 13vw;
`;
export const ContainerDetailsRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 20vh;
  left: 68vw;
`;

export const ContainerFooter = styled.div`
  width: auto;
  height: 30vh;

  order: 2;

  background: #200e64;
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
`;

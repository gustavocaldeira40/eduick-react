import styled from 'styled-components';

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

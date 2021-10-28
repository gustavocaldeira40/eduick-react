import styled from 'styled-components';

export const Container = styled.div`
  height: 323px;
  background: #ffffff;
  box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
  border-radius: 4px;

  margin: 2vh 1vw;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContainerImage = styled.div``;

export const ContainerContent = styled.div`
  padding: 0 5%;
`;

export const ContainerInformationCourses = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1vh 0;
`;

export const ContainerStarts = styled.div``;

export const ContainerLessons = styled.div`
  width: 84px;
  height: 31px;
  background: #cfc9e9;
  opacity: 0.4;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLessons = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 160%;
  letter-spacing: -0.01em;
  text-transform: uppercase;

  color: #000000;
  text-transform: uppercase;

  opacity: 0.8;
`;

export const TextTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;

  color: #200e64;
`;

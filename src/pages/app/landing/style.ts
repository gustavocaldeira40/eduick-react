import styled from 'styled-components'

export type TextTitle = {
  color?: any
  isBold?: boolean
}

/* has configure of media for if user be in window minium of 500px media  he're rendered */

export const ContainerGeneral = styled.div`
  height: 100vh;

  @media only screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`

export const ContainerTextMenu = styled.div`
  width: 100%;
`

export const TextMenu = styled.p`
  width: 7vw;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 80%;
  background: linear-gradient(180deg, #7a57fd 0%, #6135d7 100%);
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  order: 1;

  @media only screen and (max-width: 500px) {
    margin: 0;
    width: auto;
    height: 80%;
    padding: 0 7vw;
    display: block;
  }
`

export const ContainerContent = styled.div`
  width: 30vw;
  height: 70%;

  margin-left: 45vw;
  margin-top: 7vh;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    width: auto;
    height: 20%;
    margin: 0;
  }
`

export const ContainerTexts = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 60%;

  @media only screen and (max-width: 500px) {
    height: 100%;
    width: auto;
    display: block;
  }
`

export const TextTitle = styled.p<TextTitle>`
  width: 334px;
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-size: 48px;
  line-height: 57px;
  letter-spacing: -0.06em;
  color: ${(props) => (props.color ? props.color : '#ffffff')};

  @media only screen and (max-width: 500px) {
    font-size: 28px;
    width: auto;
  }
`

export const TextDescription = styled.p`
  width: 496px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 31px;
  margin: 2vw 0;

  color: #ffffff;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

export const ContainerAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3vh 0;

  @media only screen and (max-width: 500px) {
    margin: 5vh 0;
  }
`

export const ContainerDetailsLeft = styled.div`
  position: fixed;
  right: 0;
  top: 30vh;
  bottom: 20vh;
  left: 12vw;

  @media only screen and (max-width: 500px) {
    display: block;
  }
`
export const ContainerDetailsRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 20vh;
  left: 73vw;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

export const ContainerMiniature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;
  z-index: 1;
`

export const ContainerFooter = styled.div`
  height: 20%;
  width: 100%;

  background: #200e64;
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);

  order: 2;

  @media only screen and (max-width: 500px) {
    margin: 0;
    width: 100%;
    height: 20%;
  }
`

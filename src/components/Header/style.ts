import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Colors from '../../styles/Colors'

type ContainerProps = {
  background?: string
}
type ContainerHeaderProps = {
  width?: string | number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${(props) =>
    props.background ? props.background : 'linear-gradient(180deg, #7a57fd 0%, #6135d7 100%)'};

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`

export const ContainerIcon = styled.button`
  border: none;
  list-style: none;
  background-color: transparent;
  padding: 2%;
`

export const ContainerHeader = styled.div<ContainerHeaderProps>`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '60%')};
  @media only screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  @media only screen and (max-width: 500px) {
    margin-left: 4vw;
  }
`

export const ImageLogo = styled.img`
  padding: 20px;
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  width: 20%;
`

export const LinkPersonalized = styled(Link)`
  cursor: pointer;
`

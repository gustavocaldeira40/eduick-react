import { Dialog, DialogContent, DialogTitle, Grid } from '@material-ui/core'
import styled from 'styled-components'

export type TextTitleProps = { isUppercase?: boolean; isBold?: boolean; colorPersonalized?: any }

export const ContainerIcon = styled.div`
  width: 51px;
  height: 51px;
  background: #200e64;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  left: 65vw;
  right: 25vw;
  top: 24vh;
  bottom: 73vh;

  position: fixed;
  cursor: pointer;
`

export const DialogPersonalized = styled(Dialog)``

export const ContainerTitle = styled(Grid)`
  margin: 2% 0;
  background-color: #6a40e4;
`

export const TextTitle = styled.p<TextTitleProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-size: 34px;
  line-height: 118.5%;

  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'normal')};

  letter-spacing: -0.06em;

  color: ${(props) => (props.colorPersonalized ? 'rgb(255,234,164)' : 'white')};
`

export const DialogContentPersonalized = styled(DialogContent)`
  background-color: #6a40e4;
  height: 45vh;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  @media only screen and (max-width: 500px) {
    width: auto;
    height: 100vh;
  }
`

export const ContainerFields = styled.div`
  height: 20em;
  display: flex;
  flex-direction: column;
  padding: 2%;
`

export const LabelFields = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 191.68%;

  color: #ffffff;
`

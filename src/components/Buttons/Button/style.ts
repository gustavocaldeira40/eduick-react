import styled from 'styled-components'
import { Button } from '@material-ui/core'

type TextButtonProps = {
  isUppercase?: boolean
  color?: string
}

type ContainerButtonProps = {
  marginTop?: string | number
  width?: string | number
  background?: string
}

export const Container = styled.div<ContainerButtonProps>`
  background-color: ${(props) => (props.background ? props.background : '#ffd74f')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
  border-radius: 4px;

  width: ${(props) => (props.width ? props.width : '165px')};
  height: 48px;
  cursor: pointer;
`

export const ButtonPersonalized = styled(Button)`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const TextButton = styled.p<TextButtonProps>`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;

  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'none')};

  text-align: center;
  letter-spacing: -0.02em;

  color: ${(props) => (props.color ? props.color : '#6f48ec; ')};
`

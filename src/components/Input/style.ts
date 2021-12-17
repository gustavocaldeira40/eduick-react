import { FormHelperText, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled.div`
  width: 601px;
  height: 56px;
  background: #7955e8;
  border: 1px solid #a68eef;
  box-sizing: border-box;
  border-radius: 4px;
`

export const FormHelperTextPersonalized = styled(FormHelperText)`
  color: white;
  text-align: center;
`

export const TextFieldPersonalized = styled(TextField)`
  height: auto;
  background: rgba(255, 255, 255, 0.24);
  margin: 2% 0;
  color: white;

  border: 1px solid #ffffff;
  border-radius: 4px;

  width: 10%;
`

export const InputPersonalized = styled.input`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primary.backgroundColor};
  border: 1px solid #a68eef;
  box-sizing: border-box;
  border-radius: 4px;
`

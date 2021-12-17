import React from 'react'
import { ButtonBaseProps } from '@material-ui/core'

import { Container, TextButton, ButtonPersonalized } from './style'

export interface ButtonValues extends ButtonBaseProps {
  width?: string | number
  content?: string
  isUppercase?: boolean
  background?: string
  color?: string
  marginTop?: string | number
}

export function Button({ content, isUppercase, width, background, color, marginTop, ...rest }: ButtonValues) {
  return (
    <Container marginTop={marginTop} background={background} width={width}>
      <ButtonPersonalized {...rest} color="inherit">
        {content && (
          <TextButton isUppercase={isUppercase} color={color}>
            {content}
          </TextButton>
        )}
      </ButtonPersonalized>
    </Container>
  )
}

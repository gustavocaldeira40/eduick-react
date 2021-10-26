import React from 'react';
import { ButtonBaseProps } from '@material-ui/core';

import { Container, TextButton, ButtonPersonalized } from './style';

export interface ButtonValues extends ButtonBaseProps {
  content?: string;
  isUppercase?: boolean;
}

export function Button({ content, isUppercase, ...rest }: ButtonValues) {
  return (
    <Container>
      <ButtonPersonalized {...rest} color="inherit">
        {content && <TextButton isUppercase={isUppercase}>{content}</TextButton>}
      </ButtonPersonalized>
    </Container>
  );
}

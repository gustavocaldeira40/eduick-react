import React from 'react';

import { Container, TextButton, ButtonPersonalized } from './style';

export function Button() {
  return (
    <Container>
      <ButtonPersonalized type="button">
        <TextButton>Get Started</TextButton>
      </ButtonPersonalized>
    </Container>
  );
}

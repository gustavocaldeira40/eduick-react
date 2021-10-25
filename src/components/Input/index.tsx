import React from 'react';

import { Container, InputPersonalized } from './style';

export function Input() {
  return (
    <Container>
      <InputPersonalized type="text" id="fname" name="fname" />
    </Container>
  );
}

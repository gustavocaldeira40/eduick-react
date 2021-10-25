import React from 'react';

import { Container, Label } from './style';

export function CheckBox() {
  return (
    <Container>
      <input type="radio" id="scales" name="scales" checked />
      <Label htmlFor="scales">Scales</Label>
    </Container>
  );
}

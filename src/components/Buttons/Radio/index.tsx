import React, { useState } from 'react';
import { ButtonBaseProps } from '@material-ui/core';

import { Container, RadioPersonalized, TextRadio } from './style';

import CheckIcon from '../../../assets/icons/check-icon.png';

export interface RadioProps extends ButtonBaseProps {
  register?: any;
  selected: boolean;
  content?: string;
}

export function RadioButton({ register, selected, content, ...rest }: RadioProps) {
  return (
    <Container>
      <RadioPersonalized {...register} type="button" isDisabled={!selected} isChecked={selected} {...rest}>
        {selected && <img src={CheckIcon} alt="check icon" />}
      </RadioPersonalized>
      <TextRadio>{content && content}</TextRadio>
    </Container>
  );
}

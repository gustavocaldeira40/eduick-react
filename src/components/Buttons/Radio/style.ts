import styled from 'styled-components';
import { Colors } from '../../../styles';

export type RadioProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export const Container = styled.div`
  width: 162px;
  height: 56px;

  background: #7955e8;
  border: 1px solid #a68eef;
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioPersonalized = styled.button<RadioProps>`
  width: 18px;
  height: 18px;
  background: ${(props) => (props.isChecked ? '#ffd74f' : 'white')};
  opacity: ${(props) => (props.isDisabled ? '0.2' : '1')};
  border-radius: 25px;
  border: none;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextRadio = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 191.68%;

  margin: 0 5%;

  text-transform: uppercase;

  color: #ffffff;
`;

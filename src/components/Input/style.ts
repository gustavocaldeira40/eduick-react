import styled from 'styled-components';

export const Container = styled.div`
  width: 601px;
  height: 56px;
  background: #7955e8;
  border: 1px solid #a68eef;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const InputPersonalized = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  list-style: none;

  &:focus {
    border: none;
  }
`;

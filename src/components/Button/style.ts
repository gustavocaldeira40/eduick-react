import styled from 'styled-components';

export const Container = styled.div`
  background: #ffd74f;
  box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
  border-radius: 4px;

  width: 165px;
  height: 48px;
`;

export const ButtonPersonalized = styled.button`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #6f48ec;
`;

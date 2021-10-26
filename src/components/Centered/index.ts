/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

export default styled.div<any>`
  display: flex;
  flex: 1;
  ${(props) => {
    if (!props.avoidFullHeight) {
      return css`
        height: 80vh;
      `;
    }
  }}
  justify-content: center;
  align-items: center;
`;

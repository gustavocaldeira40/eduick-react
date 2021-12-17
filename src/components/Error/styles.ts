import styled from 'styled-components'

export const Emoji = styled.p`
  font-size: 52px;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: calc(16px + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
  font-weight: 400;
  margin-bottom: 8px;
  color: white;
`

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 22px;
  color: white;
`

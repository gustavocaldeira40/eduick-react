import React from 'react'

import Error from '../Error'

import * as S from './styles'

function NotFound({ history }: any) {
  return (
    <S.Container>
      <Error
        status={404}
        title="Página não encontrada"
        message="A página que você está procurando não pode ser encontrada."
      />
    </S.Container>
  )
}

export default NotFound

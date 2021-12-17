import React from 'react'

import * as S from './styles'

type ErrorProps = {
  title?: string
  message?: string
  status: number
  children?: JSX.Element
}

export default function Error({ title, message, status, children }: ErrorProps) {
  const emojisBySatus = {
    500: '😱',
    404: '😅',
    401: '🤔',
  } as any

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        {status && <S.Emoji>{emojisBySatus[status]}</S.Emoji>}
        {title && <S.Title>{title}</S.Title>}
        {message && <S.Message>{message}</S.Message>}

        {children}
      </div>
    </div>
  )
}

import React, { useState } from 'react'

import {
  Container,
  ContainerImage,
  ContainerContent,
  ContainerStarts,
  ContainerInformationCourses,
  ContainerLessons,
  TextLessons,
  TextTitle,
} from './style'
import CourseIcon from '../../assets/images/course-example.png'

type CardsProps = {
  width?: string | number
  height?: string | number
  classification?: []
  banner: string
  title: string
  lessons: number
  children?: any
}

//  <AiTwotoneStar color="#FFC908" size={23} />
export default function Cards({ width, height, banner, title, lessons, children, ...rest }: CardsProps) {
  return (
    <Container>
      <ContainerImage>
        <img src={CourseIcon} alt="courses banner" {...rest} />
      </ContainerImage>
      <ContainerContent>
        <ContainerInformationCourses>
          <ContainerStarts>{children}</ContainerStarts>
          <ContainerLessons>
            <TextLessons>{`${lessons} LESSONS`}</TextLessons>
          </ContainerLessons>
        </ContainerInformationCourses>
        <TextTitle>{title}</TextTitle>
      </ContainerContent>
    </Container>
  )
}

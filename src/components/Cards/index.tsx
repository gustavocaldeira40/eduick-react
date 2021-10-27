import { Image } from '@material-ui/icons';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/all';

import {
  Container,
  ContainerImage,
  ContainerContent,
  ContainerStarts,
  ContainerInformationCourses,
  ContainerLessons,
  TextLessons,
  TextTitle,
} from './style';
import CourseIcon from '../../assets/images/course-example.png';

type CardsProps = {
  width?: string | number;
  height?: string | number;
  classification?: [];
  banner: string;
  title: string;
  lessons: number;
};

export default function Cards({ width, height, banner, title, lessons, ...rest }: CardsProps) {
  return (
    <Container>
      <ContainerImage>
        <img src={CourseIcon} alt="courses banner" {...rest} />
      </ContainerImage>
      <ContainerContent>
        <ContainerInformationCourses>
          <ContainerStarts>
            <AiTwotoneStar color="#FFC908" size={23} />
            <AiTwotoneStar color="#FFC908" size={23} />
            <AiTwotoneStar color="#FFC908" size={23} />
            <AiTwotoneStar color="#C4C4C4" size={23} />
            <AiTwotoneStar color="#C4C4C4" size={23} />
          </ContainerStarts>
          <ContainerLessons>
            <TextLessons>{`${lessons} LESSONS`}</TextLessons>
          </ContainerLessons>
        </ContainerInformationCourses>
        <TextTitle>{title}</TextTitle>
      </ContainerContent>
    </Container>
  );
}

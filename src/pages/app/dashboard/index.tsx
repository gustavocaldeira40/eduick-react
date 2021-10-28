import React, { useState } from 'react';

import { AiTwotoneStar } from 'react-icons/all';
import { Header, Svg } from '../../../components';

import {
  Container,
  TextTitleHeader,
  ContainerCardTitle,
  ContainerIconLeft,
  ContainerIconRight,
  ContainerWelcome,
  ContainerTexts,
  TextWelcome,
  TextDescription,
  ContainerCards,
  ContainerPagination,
  ContainerDot,
  ContainerFooter,
} from './style';

import Details from '../../../assets/svg/details-search.svg';
import DetailsPeoples from '../../../assets/svg/details-peoples.svg';
import Cards from '../../../components/Cards';
import CoursesValues from '../../../models/courses';
import Colors from '../../../styles/Colors';

export default function Dashboard() {
  const [cards, setCards] = useState<CoursesValues[]>([
    {
      id: 1,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 3,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 2,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 3,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 3,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 2,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 4,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 1,
      banner: '../../assets/images/course-example.png',
    },
  ]);

  return (
    <Container>
      <Header
        widthHeader="70%"
        background={Colors.primary.backgroundColor}
        textButton="Change to teacher mode"
        backgroundbutton="rgba(32, 14, 100,0.3)"
        colorButton="white"
        haveAvatar
        disabledButton
        widthButton="186px">
        <TextTitleHeader>My Classes</TextTitleHeader>
      </Header>
      <ContainerIconLeft>
        <Svg path={Details} />
      </ContainerIconLeft>
      <ContainerCardTitle>
        <ContainerTexts>
          <ContainerWelcome>
            <TextWelcome>Hello</TextWelcome>
            <TextWelcome isBold>Studant</TextWelcome>
          </ContainerWelcome>
          <TextDescription>
            Whether you are a student trying to find your ideal private language teachers/tutors
          </TextDescription>
        </ContainerTexts>
        <ContainerIconRight>
          <Svg path={DetailsPeoples} />
        </ContainerIconRight>
      </ContainerCardTitle>
      <ContainerCards>
        {cards.map((card, index) => {
          return (
            <Cards lessons={card.lessons} title={card.name} banner={card.banner} key={index}>
              {card.lessons ? (
                <AiTwotoneStar key={index} color="#FFC908" size={23} />
              ) : (
                <AiTwotoneStar key={index} color=" #C4C4C4" size={23} />
              )}
            </Cards>
          );
        })}
      </ContainerCards>
      <ContainerPagination>
        <ContainerDot />
        <ContainerDot />
        <ContainerDot />
      </ContainerPagination>
      <ContainerFooter>
        <TextDescription>Copyright © 2020 Eduick. Todos os direitos reservados.</TextDescription>
      </ContainerFooter>
    </Container>
  );
}

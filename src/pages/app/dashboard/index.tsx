import React, { useState } from 'react';

import { Avatar, Grid } from '@material-ui/core';
import { Button, Header, Svg } from '../../../components';

import {
  Container,
  ContainerHeaderGeneral,
  ContainerHeader,
  ContainerContentsHeader,
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

import Logo from '../../../assets/main/logo.png';
import AvatarIcon from '../../../assets/icons/avatar-icon.png';
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
      lessons: 10,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 2,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 10,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 3,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 10,
      banner: '../../assets/images/course-example.png',
    },
    {
      id: 4,
      name: 'Master English: Improve Your Speaking',
      classification: '3.0',
      lessons: 10,
      banner: '../../assets/images/course-example.png',
    },
  ]);
  return (
    <Container>
      {/*  <ContainerHeaderGeneral>
        <ContainerHeader>
          <ContainerContentsHeader>
            <img src={Logo} alt="logo" />
            <TextTitleHeader>My Classes</TextTitleHeader>
          </ContainerContentsHeader>
          <ContainerContentsHeader>
            <Button content="Change to teacher mode" background="rgba(32, 14, 100,0.3)" color="white" width="70%" />
            <Avatar src={AvatarIcon} />
          </ContainerContentsHeader>
        </ContainerHeader>
      </ContainerHeaderGeneral> */}
      <Header
        widthHeader="70%"
        background={Colors.primary.backgroundColor}
        textButton="Change to teacher mode"
        backgroundbutton="rgba(32, 14, 100,0.3)"
        colorButton="white"
        haveAvatar
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
          return <Cards lessons={card.lessons} title={card.name} banner={card.banner} key={index} />;
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

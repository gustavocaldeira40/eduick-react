import React from 'react';

import { Link } from 'react-router-dom';

import {
  ContainerGeneral,
  Container,
  ContainerHeader,
  ContainerLogo,
  ImageLogo,
  TextMenu,
  ContainerContent,
  ContainerTitle,
  TextTitle,
  TextDescription,
  ImageSheets,
  ContainerAction,
  BackgroundImage,
  ImageScreen,
  ContainerFooter,
} from './style';

import Logo from '../../assets/main/logo.png';
import ImageLeftSide from '../../assets/images/ladingImage.png';
import ImageRightSide from '../../assets/images/sheetsLanding.png';

import { Button, CheckBox, Input } from '../../components';

export default function Landing() {
  return (
    <ContainerGeneral>
      <Container>
        <ContainerHeader>
          <ContainerLogo>
            <ImageLogo src={Logo} style={{ padding: '20px' }} alt="logo" />
            <Link to="/Works">
              <TextMenu>How it works</TextMenu>
            </Link>
            <Link to="/About-us">
              <TextMenu>About Us</TextMenu>
            </Link>
          </ContainerLogo>
          <Button />
        </ContainerHeader>

        <ContainerContent>
          <ContainerTitle>
            <TextTitle>Find your</TextTitle>
            <TextTitle isBold color="rgb(255,234,164)">
              Best Teacher
            </TextTitle>
          </ContainerTitle>
          <TextDescription>
            Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to
            find great students for your customised private lessons!
          </TextDescription>
          <Input />
          <ContainerAction>
            <CheckBox />
            <CheckBox />
            <Button />
          </ContainerAction>
        </ContainerContent>
      </Container>

      <ContainerFooter />
      <BackgroundImage />
      <ImageScreen src={ImageLeftSide} alt="image screen" />
    </ContainerGeneral>
  );
}

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

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
  ContainerInput,
  TextDescription,
  ContainerAction,
  BackgroundImage,
  ImageScreen,
  ContainerFooter,
} from './style';

import { Button, Input, RadioButton } from '../../../components';

import ImageLeftSide from '../../../assets/images/woman.png';
import Logo from '../../../assets/main/logo.png';
import ModalLogin from '../../../modals/login';
import LandingData from '../../../models/lading';
import { Svg } from '../../../components/Svg';

export default function Landing() {
  const [openModal, setOpenModal] = useState(false);

  const roles = [
    {
      id: 1,
      name: 'teacher',
      content: 'i’m a teacher',
      checked: false,
    },
    {
      id: 2,
      name: 'student',
      content: 'i’m a student',
      checked: false,
    },
  ];

  const [values, setValues] = useState<LandingData>({
    role: '',
  });

  const [radioValue, setRadioValue] = useState(false);

  const { register, reset, handleSubmit, formState, setValue, control } = useForm<LandingData>({
    defaultValues: values,
  });

  const { isSubmitting, errors } = formState;

  return (
    <ContainerGeneral>
      <BackgroundImage>
        <ImageScreen src={ImageLeftSide} alt="image screen" />
      </BackgroundImage>
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
          <Button content="Get Started" onClick={() => setOpenModal(true)} />

          {openModal && (
            <ModalLogin title="Get Started" subTitle="Just Login" close={() => setOpenModal(false)} open={openModal} />
          )}
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
          <ContainerInput>
            <Input columns={{ md: 12, xs: 12, lg: 12 }} placeholder="Type here what are you looking for" />
          </ContainerInput>
          <ContainerAction>
            <RadioButton
              register={register('role', { required: true })}
              selected={values.role === 'teacher' || false}
              content="i’m a teacher"
              onClick={() => {
                setValue('role', 'teacher');
                setValues({ ...values, role: 'teacher' });
              }}
            />
            <RadioButton
              register={register('role', { required: true })}
              selected={values.role === 'student' || false}
              content="i’m a student"
              onClick={() => {
                setValue('role', 'student');
                setValues({ ...values, role: 'student' });
              }}
            />

            <Button content="Search" isUppercase />
          </ContainerAction>
        </ContainerContent>
      </Container>
      <div style={{ position: 'absolute' }}>
        <Svg />
      </div>

      <ContainerFooter />
    </ContainerGeneral>
  );
}

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  ContainerGeneral,
  Container,
  ContainerContent,
  ContainerTitle,
  TextTitle,
  ContainerInput,
  TextDescription,
  ContainerAction,
  ContainerDetailsLeft,
  ContainerDetailsRight,
  ContainerFooter,
} from './style';

import { Button, Header, Input, RadioButton, Svg } from '../../../components';

import IconLeft from '../../../assets/svg/detail-left.svg';

import LandingData from '../../../models/lading';

export default function Landing() {
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
      <ContainerDetailsLeft>
        <Svg path={IconLeft} />
      </ContainerDetailsLeft>
      <Container>
        <Header />
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
            <Link to="/Dashboard">
              <Button content="Search" isUppercase />
            </Link>
          </ContainerAction>
        </ContainerContent>
      </Container>
      <ContainerDetailsRight>
        <Svg />
      </ContainerDetailsRight>

      <ContainerFooter />
    </ContainerGeneral>
  );
}

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import {
  ContainerGeneral,
  Container,
  ContainerContent,
  ContainerTexts,
  TextTitle,
  TextDescription,
  ContainerAction,
  ContainerMiniature,
  ContainerDetailsLeft,
  ContainerDetailsRight,
  ContainerFooter,
} from './style';

import { Button, Header, Input, RadioButton, Svg } from '../../../components';

import IconLeft from '../../../assets/svg/detail-left.svg';
import IconMiniature from '../../../assets/svg/detail-miniature.svg';
import IconRight from '../../../assets/svg/detail-right.svg';

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
      {/* Configuration of media if window of user is until of 1200px he're rendered */}
      <Media query="(min-width: 1200px)">
        {(matches) =>
          matches && (
            <ContainerDetailsLeft>
              <Svg path={IconLeft} />
            </ContainerDetailsLeft>
          )
        }
      </Media>
      {/* Container General of Screen */}
      <Container>
        <Header />
        <ContainerContent>
          <ContainerTexts>
            <TextTitle>Find your</TextTitle>
            <TextTitle isBold color="rgb(255,234,164)">
              Best Teacher
            </TextTitle>
            <TextDescription>
              Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying
              to find great students for your customised private lessons!
            </TextDescription>
          </ContainerTexts>
          <Input columns={{ md: 12, xs: 12, lg: 12 }} placeholder="Type here what are you looking for" />
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

            {/* Configuration of media for if window of user is max of 1200px he're rendered */}
            <Media query="(min-width: 1200px)">
              {(matches) =>
                matches && (
                  <Link to="/Dashboard">
                    <Button content="Search" isUppercase />
                  </Link>
                )
              }
            </Media>
          </ContainerAction>

          {/* if window was minium of 500px he'are rendered */}
          <Media query="(max-width: 500px)">
            {(matches) =>
              matches && (
                <Link to="/Dashboard">
                  <Button content="Search" isUppercase width="100%" marginTop="8%" />
                </Link>
              )
            }
          </Media>

          {/* Configuration of media if window of user is minimum of 500px he're rendered */}
          <Media query="(max-width: 500px)">
            {(matches) =>
              matches && (
                <ContainerMiniature>
                  <Svg path={IconMiniature} />
                </ContainerMiniature>
              )
            }
          </Media>
        </ContainerContent>
      </Container>

      {/* Footer with background blue */}
      <ContainerFooter>
        <ContainerDetailsRight>
          <Svg path={IconRight} />
        </ContainerDetailsRight>
      </ContainerFooter>
    </ContainerGeneral>
  );
}

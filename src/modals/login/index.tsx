import React, { useEffect, useState } from 'react';

import { DialogContent, DialogActions, useMediaQuery, CircularProgress, DialogTitle, Grid } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Button, Centered, Input } from '../../components';
import { Colors } from '../../styles';

import {
  ContainerIcon,
  DialogPersonalized,
  ContainerTitle,
  DialogContentPersonalized,
  TextTitle,
  ContainerFields,
  LabelFields,
} from './style';

import LoginData from '../../models/login';

import IconClose from '../../assets/icons/close-icon.png';

export type ModalProps = {
  close: () => void;
  open: boolean;
  title: string;
  subTitle?: string;
  item?: any;
};

export default function ModalLogin({ close, open, title, subTitle, item }: ModalProps) {
  const [loading, setLoading] = useState(false);

  const { register, reset, handleSubmit, formState, setValue, control } = useForm<LoginData>({
    defaultValues: item,
  });
  const { isSubmitting, errors } = formState;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    reset(item);
  }, [item, reset]);

  const [values, setValues] = useState<LoginData>({
    username: '',
    password: '',
  });

  const onSubmit = async (value: any) => {
    setLoading(true);
  };

  if (loading) {
    return (
      <Centered>
        <CircularProgress color="inherit" style={{ color: Colors.secondary.backgroundColor }} />
      </Centered>
    );
  }

  return (
    <DialogPersonalized
      maxWidth="md"
      fullScreen={fullScreen}
      fullWidth
      open={open}
      onClose={close}
      aria-labelledby="responsive-dialog-title">
      <DialogContentPersonalized>
        <ContainerIcon onClick={() => close()}>
          <img src={IconClose} alt="close icon" />
        </ContainerIcon>
        <ContainerTitle>
          <TextTitle>{title}</TextTitle>
          <TextTitle colorPersonalized isUppercase isBold>
            {subTitle}
          </TextTitle>
        </ContainerTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerFields>
            <LabelFields>Username</LabelFields>
            <Input
              defaultValue={values.username}
              register={register('username', { required: 'Esse campo é obrigatório' })}
              name="username"
              columns={{ md: 12, xs: 12, lg: 12 }}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              onChange={(e: any) => {
                setValue('username', e.target.value, {
                  shouldValidate: true,
                });
              }}
            />

            <LabelFields>Password</LabelFields>
            <Input
              defaultValue={values.password}
              register={register('password', { required: 'Esse campo é obrigatório' })}
              name="password"
              columns={{ md: 12, xs: 12, lg: 12 }}
              password
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              onChange={(e: any) => {
                setValue('password', e.target.value, {
                  shouldValidate: true,
                });
              }}
            />
          </ContainerFields>

          <DialogActions>
            <Button
              isUppercase
              content="Login"
              onClick={() => {
                close();
              }}
            />
          </DialogActions>
        </form>
      </DialogContentPersonalized>
    </DialogPersonalized>
  );
}

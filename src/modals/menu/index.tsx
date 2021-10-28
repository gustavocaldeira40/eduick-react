import React, { useEffect, useState } from 'react';

import { DialogActions, useMediaQuery, CircularProgress } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import { Button, Centered, Input } from '../../components';
import { ContainerIcon, DialogPersonalized, DialogContentPersonalized, ContainerHeader } from './style';

import Logo from '../../assets/main/logo.png';
import IconClose from '../../assets/icons/close-icon.png';

export type ModalProps = {
  close: () => void;
  open: boolean;
};

export default function ModalMenu({ close, open }: ModalProps) {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const onSubmit = async (value: any) => {
    setLoading(true);
  };

  if (loading) {
    return (
      <Centered>
        <CircularProgress color="inherit" style={{ color: '#200E64' }} />
      </Centered>
    );
  }

  return (
    <DialogPersonalized fullScreen={fullScreen} open={open} onClose={close} aria-labelledby="responsive-dialog-title">
      <DialogContentPersonalized>
        <ContainerHeader>
          <img src={Logo} style={{ padding: '20px' }} alt="logo" />
          <ContainerIcon onClick={() => close()}>
            <img src={IconClose} alt="close icon" />
          </ContainerIcon>
        </ContainerHeader>
        <DialogActions>
          <Button
            isUppercase
            content="Get Started"
            onClick={() => {
              close();
            }}
          />
        </DialogActions>
      </DialogContentPersonalized>
    </DialogPersonalized>
  );
}

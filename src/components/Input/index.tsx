import React, { useState } from 'react';
import { Grid, TextField, InputAdornment, IconButton, InputBaseProps } from '@material-ui/core';

import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';

import { FormHelperTextPersonalized, TextFieldPersonalized } from './style';

export interface InputProps extends InputBaseProps {
  name?: string;
  type?: string;
  columns?: any;
  password?: boolean;
  hidden?: boolean;
  register?: any;
  defaultValue?: string;
  helperText?: string;
}

export function Input({
  name,
  type,
  columns,
  password,
  hidden,
  register,
  defaultValue,
  helperText,
  ...props
}: InputProps) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const defaultProps = {
    variant: 'outlined',
    fullWidth: true,
    defaultValue: defaultValue || '',
  };

  if (password) {
    return (
      <Grid item {...columns}>
        {!hidden && (
          <TextFieldPersonalized
            {...register}
            {...defaultProps}
            name={name}
            type={visiblePassword ? 'text' : 'password'}
            InputLabelProps={{ style: { height: 20 } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setVisiblePassword(!visiblePassword)}
                    aria-label="toggle password visibility"
                    edge="end">
                    {!visiblePassword ? (
                      <MdOutlineVisibility size={22} color="#BBA8F2" />
                    ) : (
                      <MdOutlineVisibilityOff size={22} color="#BBA8F2" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              'aria-label': 'Weight',
            }}
            {...props}
          />
        )}
        {helperText && <FormHelperTextPersonalized>{helperText}</FormHelperTextPersonalized>}
      </Grid>
    );
  }

  return (
    <Grid item {...columns}>
      {!hidden && (
        <TextFieldPersonalized
          {...register}
          {...defaultProps}
          name={name}
          type={type}
          InputLabelProps={{ style: { height: 20 } }}
          InputProps={{
            style: { color: 'white' },
          }}
          {...props}
        />
      )}
    </Grid>
  );
}

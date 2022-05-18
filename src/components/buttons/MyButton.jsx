import React from 'react';
import { Button } from '@mui/material';

export default function MyButton(props) {
  const { value, children, ...rest } = props;

  return (
    <Button {...rest}>
      {children}
      {' '}
      {value}
    </Button>
  );
}

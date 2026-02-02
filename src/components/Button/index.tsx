import React from 'react'
import { IButton } from '../../types';
import { ButtonContainer } from './styles';

const Button = ({title, variant = "primary", onClick, type = "button"}: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} type={type}>{title}</ButtonContainer>
  )
}

export { Button }

import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils'

interface ToggleProps {
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}
export const Toggle: React.FC<ToggleProps> = ({ onChecked, isChecked }) => {
  return (
    <Label>
      <Input type="checkbox" onChange={onChecked} checked={isChecked} />
      <Span></Span>
    </Label>
  );
};

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2rem;

  @media(max-width: 768px) {
      width: 3rem;
      height: 1.5rem;
  }
`;

const Span = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 2rem;
  padding: 2px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Colors.midGrey};
  transition: 0.4s;

  &:before {
    position: absolute;
    border-radius: 50%;
    bottom: 2px;
    content: '';
    left: 4px;
    height: 28px;
    width: 28px;
    background: white;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    border-radius: 1.5rem;
    padding: 1px;

    &:before {
      height: 20px;
      width: 20px;
      bottom: 2.5px;
      left: 4px;
    }
  }
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span} {
    background: #2196f3;
  }

  &:checked + ${Span}:before {
    transform: translateX(28px);
  }

  @media (max-width: 768px) {
    &:checked + ${Span}:before {
      transform: translateX(20px);
    }
  }
`;

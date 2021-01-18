import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
    extendCss?: string
}

export const Wrapper: React.FC<WrapperProps> = ({ children, extendCss}) => {
  const Wrapper = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    ${extendCss ? extendCss : undefined}
  `;
  return <Wrapper>{children}</Wrapper>;
};

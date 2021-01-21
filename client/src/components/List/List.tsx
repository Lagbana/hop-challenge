import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils'

interface ListProps {}
export const List: React.FC<ListProps> = ({ children }) => {
  const List = styled.ul`
    padding: 0.5rem;
    list-style: none;
    margin-top: 0.25rem;
  `;
  return <List>{children}</List>;
};

interface ListItemProps {
    index: number
}
export const ListItem: React.FC<ListItemProps> = ({ index, children }) => {
    const isEven =  index % 2 === 0 ? true : false
    const ListItem = styled.li`
      text-align: left;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.5rem;
      background: ${isEven ? `${Colors.greyRGB}` : `${Colors.lighGreyRGB}`};
      color: ${isEven ? `${Colors.white}` : `${Colors.black}`};
    `;

  return <ListItem>{children}</ListItem>;
};

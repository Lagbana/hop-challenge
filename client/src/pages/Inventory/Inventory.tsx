import styled from 'styled-components';

interface InventoryProps {}
export const Inventory: React.FC<InventoryProps> = ({ children }) => {
  const Container = styled.div`
    background-color: lime;
    height: 93vh;
    width: 100%;
  `;
  return <Container>{children}</Container>;
};

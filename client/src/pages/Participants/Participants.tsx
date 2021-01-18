import styled from 'styled-components';

interface ParticipantsProps {}
export const Participants: React.FC<ParticipantsProps> = ({ children }) => {
  const Container = styled.div`
    background-color: pink;
    height: 93vh;
    width: 100%;
  `;
  return <Container>{children}</Container>;
};

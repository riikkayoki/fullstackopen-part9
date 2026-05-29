import styled from 'styled-components';

interface HeaderProps {
  name: string;
}

const Title = styled.h1`
  color: navy;
`;

export const Header = (props: HeaderProps) => {
  return <Title>{props.name}</Title>;
};

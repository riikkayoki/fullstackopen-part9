import styled from 'styled-components';

interface TotalProps {
  total: number;
}

const TotalLine = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

export const Total = (props: TotalProps) => {
  return <TotalLine>Number of exercises {props.total}</TotalLine>;
};

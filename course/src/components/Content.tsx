import styled from 'styled-components';
import type { CoursePart } from '../types';
import { Part } from './Part';

interface ContentProps {
  parts: Array<CoursePart>;
}

const PartList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = (props: ContentProps) => {
  return (
    <PartList>
      {props.parts.map((part: CoursePart) => (
        <Part key={part.name} part={part} />
      ))}
    </PartList>
  );
};

import type { JSX, ReactNode } from 'react';
import styled from 'styled-components';
import type { CoursePart } from '../types';

interface PartProps {
  part: CoursePart;
}

interface PartLayoutProps {
  name: string;
  exerciseCount: number;
  description?: string;
  children?: ReactNode;
}

const PartBlock = styled.div`
  color: #333;
  margin-bottom: 1rem;
`;

const PartName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const PartDetail = styled.p`
  margin: 0;
`;

const Description = styled.em`
  font-style: italic;
`;

const PartLayout = (props: PartLayoutProps): JSX.Element => {
  return (
    <PartBlock>
      <PartName>
        {props.name} {props.exerciseCount}
      </PartName>
      {props.description ? (
        <PartDetail>
          <Description>{props.description}</Description>
        </PartDetail>
      ) : null}
      {props.children}
    </PartBlock>
  );
};

export const Part = (props: PartProps): JSX.Element => {
  const { part } = props;

  switch (part.kind) {
    case "basic":
      return (
        <PartLayout
          name={part.name}
          exerciseCount={part.exerciseCount}
          description={part.description}
        />
      );
    case "group":
      return (
        <PartLayout name={part.name} exerciseCount={part.exerciseCount}>
          <PartDetail>project exercises {part.groupProjectCount}</PartDetail>
        </PartLayout>
      );
    case "background":
      return (
        <PartLayout
          name={part.name}
          exerciseCount={part.exerciseCount}
          description={part.description}
        >
          <PartDetail>submit to {part.backgroundMaterial}</PartDetail>
        </PartLayout>
      );
    case "special":
      return (
        <PartLayout
          name={part.name}
          exerciseCount={part.exerciseCount}
          description={part.description}
        >
          <PartDetail>required skills: {part.requirements.join(", ")}</PartDetail>
        </PartLayout>
      );
  }
};

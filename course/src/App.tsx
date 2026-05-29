import styled from 'styled-components';
import type { CoursePart } from './types';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Total } from './components/Total';

const Container = styled.div`
  font-family: sans-serif;
  padding: 1rem;
`;

const calculateTotal = (parts: Array<CoursePart>): number =>
  parts.reduce((sum: number, part: CoursePart) => sum + part.exerciseCount, 0);


const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: Array<CoursePart> = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic"
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    }
  ];

  const totalExercises = calculateTotal(courseParts);

  return (
    <Container>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total total={totalExercises} />
    </Container>
  );
};

export default App;

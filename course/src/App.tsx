import styled from 'styled-components';

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface TotalProps {
  total: number;
}

interface HeaderProps {
  name: string;
}

interface ContentProps {
  parts: Array<CoursePart>;
}

const Container = styled.div`
  font-family: sans-serif;
  padding: 1rem;
`;

const Title = styled.h1`
  color: navy;
`;

const Part = styled.p`
  color: #333;
`;

const TotalLine = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const Header = (props: HeaderProps) => {
  return <Title>{props.name}</Title>;
};

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.parts.map((part: CoursePart) => (
        <Part key={part.name}>
          {part.name} {part.exerciseCount}
        </Part>
      ))}
    </div>
  );
};

const Total = (props: TotalProps) => {
  return <TotalLine>Number of exercises {props.total}</TotalLine>;
};

const calculateTotal = (parts: Array<CoursePart>): number =>
  parts.reduce((sum: number, part: CoursePart) => sum + part.exerciseCount, 0);


const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: Array<CoursePart> = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
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

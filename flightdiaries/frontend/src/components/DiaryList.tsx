import styled from 'styled-components';
import type { DiaryEntry } from '../types';
import { Entry } from './Entry';
import type { JSX } from 'react';

interface DiaryListProps {
  entries: Array<DiaryEntry>;
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiaryList = (props: DiaryListProps): JSX.Element => {
  return (
    <List>
      {props.entries.map((entry: DiaryEntry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </List>
  );
};

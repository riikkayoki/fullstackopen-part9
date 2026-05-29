import styled from 'styled-components';
import type { DiaryEntry } from '../types';
import type { JSX } from 'react';

interface EntryProps {
  entry: DiaryEntry;
}

const EntryBlock = styled.div`
  color: #333;
  margin-bottom: 16px;
`;

const EntryDate = styled.h3`
  margin: 0 0 4px;
`;

const EntryDetail = styled.p`
  margin: 0;
`;

export const Entry = (props: EntryProps): JSX.Element => {

  return (
    <EntryBlock>
      <EntryDate>{props.entry.date}</EntryDate>
      <EntryDetail>weather: {props.entry.weather}</EntryDetail>
      <EntryDetail>visibility: {props.entry.visibility}</EntryDetail>
    </EntryBlock>
  );
};

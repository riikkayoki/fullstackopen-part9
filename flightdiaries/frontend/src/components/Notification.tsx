import type { JSX } from 'react';
import styled from 'styled-components';

interface NotificationProps {
  message: string | null;
}

const ErrorBox = styled.p`
  color: crimson;
  border: 2px solid crimson;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Notification = (props: NotificationProps): JSX.Element | null => {
  if (props.message === null) {
    return null;
  }

  return <ErrorBox role="alert">{props.message}</ErrorBox>;
};

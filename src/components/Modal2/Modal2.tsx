import { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

export const Modal2: FC<Props> = ({ children, isOpen }) => {
  return <ReactModal isOpen={isOpen}>{children}</ReactModal>;
};

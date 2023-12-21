import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import ReactModal from 'react-modal';

type Props = {
  children: ReactNode;
  isOpen: boolean;
};

export const Modal: FC<Props> = ({ children, isOpen }) => {
  return <ReactModal isOpen={isOpen}>{children}</ReactModal>;
};

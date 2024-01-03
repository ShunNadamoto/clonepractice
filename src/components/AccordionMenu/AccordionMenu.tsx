import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type TestProps = {
  text: string;
  description: string;
};

export const AccordionMenu: FC<TestProps> = ({ text, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.container__textBox} onClick={() => setIsOpen(!isOpen)}>
        {text}
        <div
          className={cn(styles.container__textBox__arrow, {
            [styles['container__textBox__arrow--open']]: isOpen,
          })}
        />
      </button>
      {isOpen && <div className={styles.container__description}>{description}</div>}
    </div>
  );
};

export const AccordionMenu2: FC<TestProps> = ({ text, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.container__textBox} onClick={() => setIsOpen(!isOpen)}>
        {text}
        <div
          className={cn(styles.container__textBox__arrow, {
            [styles['container__textBox__arrow--open']]: isOpen,
          })}
        />
      </button>
      {isOpen && <div className={styles.container__description}>{description}</div>}
    </div>
  );
};

const AccordionMenu3: FC<TestProps> = ({ text, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.container__textBox} onClick={() => setIsOpen(!isOpen)}>
        {text}
        <div
          className={cn(styles.container__textBox__arrow, {
            [styles['container__textBox__arrow--open']]: isOpen,
          })}
        />
      </button>
      {isOpen && <div className={styles.container__description}>{description}</div>}
    </div>
  );
};

export default AccordionMenu3;

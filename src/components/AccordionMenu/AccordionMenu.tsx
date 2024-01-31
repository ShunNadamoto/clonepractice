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
        <div className={cn(styles.color_red, styles.letter_large)}>テスト1</div>
        <div className={cn(styles.color_red)}>テスト2</div>
        <div className={cn(styles.letter_large)}>テスト3</div>
        <div className={cn(styles.color_red, { [styles.letter_large]: text === 'big' })}>
          テスト4
        </div>
        <div className={cn(styles.color_red, { [styles.letter_large]: false })}>テスト5</div>
        <div className={cn({ [styles.color_red]: false }, { [styles.letter_large]: false })}>
          テスト6
        </div>
        <div className={cn({ [styles.color_red]: true }, { [styles.letter_large]: false })}>
          テスト7
        </div>
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

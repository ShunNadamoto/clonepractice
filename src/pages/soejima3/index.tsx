import cn from 'classnames';
import { NextPage } from 'next';
import React, { FC, useState } from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  description: string;
};
// http://localhost:3000/soejima3

const AccordionMenu: FC<Props> = ({ text, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.container__textBox} onClick={() => setIsOpen(!isOpen)}>
        {text}
        <div
          className={cn(styles.container__textBox__arrow, {
            [styles['container__textBox__arrow--open']]: isOpen,
          })}
        ></div>
      </button>
      {isOpen && <div className={styles.container__description}>{description}</div>}
    </div>
  );
};

const Soejima3: NextPage = () => {
  const [display, setDisplay] = useState(false);

  type Person = {
    id: number;
    age: number;
    name: string;
  };
  const [person, setPerson] = useState<Person[]>([
    { id: 1, age: 20, name: 'a' },
    { id: 2, age: 30, name: 'b' },
  ]);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>on off</button>
      {display && <div>Hello World!!</div>}

      <AccordionMenu text='test' description='description' />

      {person.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </>
  );
};

export default Soejima3;

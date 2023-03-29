import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type TestProps = {
  text: string;
  descripution: string;
};

export const AccordionMenu2: FC<TestProps> = ({ text, descripution }) => {
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
      {isOpen && <div className={styles.container__description}>{descripution}</div>}
    </div>
  );
};

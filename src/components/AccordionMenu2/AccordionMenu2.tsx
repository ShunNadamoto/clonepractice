import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  descripution: string;
};

export const AccordionMenu2: FC<Props> = ({ text, descripution }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {text}
        <div
          className={cn(styles.container__textBox__arrow, {
            [styles['container__textBox__arrow--open']]: isOpen,
          })}
        />
      </button>
      {isOpen && <div className={styles.container__descripution}>{descripution}</div>}
    </div>
  );
};

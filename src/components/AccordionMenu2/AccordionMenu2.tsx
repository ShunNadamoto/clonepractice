import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

type Props = {
  text: string;
  description: string;
};

export const AccordingMenu2: FC<Props> = ({ text, description }) => {
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

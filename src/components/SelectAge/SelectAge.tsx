import classNames from 'classnames';
import { useState, SetStateAction } from 'react';
import styles from './index.module.scss';

const ages = ['age', 'ten', 'twenty', 'thirty'];

export const SelectAge = () => {
  const [selectAge, setSelectAge] = useState('age');
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSelectAge(e.target.value);
  };

  return (
    <div className={styles.container}>
      <select
        className={classNames(styles.container__arrow, {
          [styles['container__arrow--open']]: isOpen,
        })}
        value={selectAge}
        onChange={handleChange}
        onClick={() => setIsOpen(!isOpen)}
      >
        {ages.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
        {isOpen}
      </select>

      <div>選択した年齢：{selectAge}</div>
    </div>
  );
};

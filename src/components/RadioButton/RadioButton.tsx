import cn from 'classnames';
import { FC, useState } from 'react';
import styles from './index.module.scss';

interface Radio {
  label: string;
  value: string;
}
export const RadioButton = () => {
  const [selected, setSelected] = useState('orange');
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(event.target.value);
  const radioButtons: Radio[] = [
    { label: 'みかん', value: 'orange' },
    { label: 'りんご', value: 'apple' },
    { label: 'ぶどう', value: 'grape' },
  ];

  return (
    <div className='container　form-check'>
      <div className='row'>
        {radioButtons.map((radio) => {
          return (
            <div className='col-4'>
              <input
                className='form-check-input'
                type='radio'
                name='fruits'
                value={radio.value}
                checked={radio.value === selected}
                onChange={changeValue}
              />
              <label className='form-Check-label'>
                <span className='fs-6'>{radio.label}</span>
              </label>
            </div>
          );
        })}
      </div>
      <div>{selected}が選択されました！</div>
    </div>
  );
};

import { ErrorMessage } from '@hookform/error-message';
import { NextPage } from 'next';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface MyFavoriteFoods {
  id: string;
  name: string;
  checked: boolean;
  disabled: boolean;
}

interface SubmitData {
  myFavoriteFoods: string[];
}

const Study17: NextPage = () => {
  const [myFavoriteFoods, setMyFavoriteFoods] = useState<MyFavoriteFoods[]>([
    {
      id: 'sushi',
      name: '寿司',
      checked: false,
      disabled: false,
    },
    {
      id: 'yakiniku',
      name: '焼肉',
      checked: false,
      disabled: false,
    },
    {
      id: 'khao_mangai',
      name: 'カオマンガイ',
      checked: false,
      disabled: false,
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SubmitData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<SubmitData> = (data: SubmitData) => {
    console.log(data);
    /* API送信 */
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {myFavoriteFoods.map((item) => {
          return (
            <div key={item.id}>
              <input
                id={item.id}
                type='checkbox'
                value={item.id}
                defaultChecked={item.checked}
                disabled={item.disabled}
                {...register('myFavoriteFoods')}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </div>
      <button type='submit' disabled={!isValid || isSubmitting}>
        確定
      </button>{' '}
    </form>
  );
};

export default Study17;

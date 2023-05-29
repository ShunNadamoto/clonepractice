import { NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';

type LoginForm = {
  name: string;
};

const Study8: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });
  console.log(watch('name'));
  //   console.log(getValues('name'));
  //   console.log('aaa');
  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div>
      react-hooks-form実装練習
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <label htmlFor='名前'>名前</label>
        <input
          id='name'
          type='text'
          {...register('name', {
            // required: '名前は必須です。',
            // minLength: { value: 4, message: '4文字以上で入力して下さい。' },
          })}
        />
        <div>{errors.name?.message}</div>
        <button type='submit'>送信</button>
      </form>
    </div>
  );
};
export default Study8;

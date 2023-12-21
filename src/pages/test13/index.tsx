import { NextPage } from 'next';
import { ReactNode, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.scss';
import { useGlobalContext } from '@/lib/context/GlobalContext';

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

const Test13: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });
  //mode:onChangeにすることでデータ入力時に文字数が不足しているとメッセージが表示されるようにする

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  const { count, setCount, userId, setUserId } = useGlobalContext();

  return (
    <>
      <div className={styles.container}>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>カウントアップ</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login Form</h1>
          <label className={styles.container__input} htmlFor='名前'>
            名前
          </label>
          <input
            id='name'
            type='text'
            {...register('name', {
              required: '名前は必須です。',
              //バリデーションでメッセージを加える
              minLength: { value: 4, message: '４文字以上で入力して下さい。' },
              //文字数の長さが足りないとエラーメッセージが出るようにする
            })}
          />
          <p className={styles.container__message}>{errors.name?.message as ReactNode}</p>
          <label className={styles.container__input} htmlFor='メールアドレス'>
            メールアドレス
          </label>
          <input
            id='email'
            type='email'
            {...register('email', {
              required: 'メールアドレスは必須です。',
            })}
          />
          <p className={styles.container__message}>{errors.email?.message as ReactNode}</p>
          <label className={styles.container__input} htmlFor='パスワード'>
            パスワード
          </label>
          <input
            id='password'
            type='password'
            {...register('password', {
              required: 'パスワードは必須です。',
              minLength: { value: 8, message: '8文字以上で入力して下さい。' },
            })}
          />
          <p className={styles.container__message}>{errors.password?.message as ReactNode}</p>

          <button type='submit'>送信</button>
        </form>
      </div>
    </>
  );
};

export default Test13;

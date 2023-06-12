import { ErrorMessage } from '@hookform/error-message';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

const Study14: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
  });
  const onSubmit = (data: any) => console.log(data);
  const { name, ref, onChange, onBlur } = register('email');
  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            {...register('email', { required: { value: true, message: '入力が必須の項目です。' } })}
          />
          {errors.email?.message && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            {...register('password', {
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}
            type='password'
            autoComplete='on'
          />
          {errors.password?.types?.pattern && <div>{errors.password.types.pattern}</div>}
          {errors.password?.types?.minLength && <div>8文字以上入力してください。</div>}
        </div>
        <button type='submit'>ログイン</button>
      </form>
    </div>
  );
};

export default Study14;

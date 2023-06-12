import { ErrorMessage } from '@hookform/error-message';
import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
};

const Study15: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onSubmit', defaultValues: { name: 'aaa', email: 'aaa@gmail.com' } });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input
        {...register('email', {
          required: true,
          maxLength: 60,
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'メールアドレスの形式が不正です',
          },
        })}
      />
      <ErrorMessage errors={errors} name='email' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Study15;

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
};

export const DayStudy3 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && 'メールアドレスを入力してください'}

      <input {...register('email', { required: 'メールアドレスを入力してください' })} />
      {errors.email && errors.email.message}
    </form>
  );
};

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

  const array = [1, 2, 3, 4, 5];
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });
  console.log(sum);

  const array2 = [1, 2, 3, 4, 5];
  let sum2 = 0;
  for (var i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  console.log(sum2);

  const array3 = [1, 2, 3, 4, 5];

  const sum3 = array3.reduce((accumulator, current) => accumulator + current);

  console.log(sum3);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
      {errors.email && 'メールアドレスを入力してください'}

      <input {...register('email', { required: 'メールアドレスを入力してください' })} />
      {errors.email && errors.email.message}
    </form>
  );
};

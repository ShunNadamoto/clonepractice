import { useForm } from 'react-hook-form';

export default function FormStudy() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: object) => console.log(data);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit'>ログイン</button>
      </form>
    </div>
  );
}

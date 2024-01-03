import { useContext } from 'react';
import { UserCountContext } from '@/ContextPractice/ContextComponents2/Parent';

const ComponentC = () => {
  const { count, setCount } = useContext(UserCountContext);
  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};

export default ComponentC;

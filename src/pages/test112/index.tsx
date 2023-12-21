import { NextPage } from 'next';
import { useState } from 'react';

const Test112: NextPage = () => {
  const [name, setName] = useState('');
  const [isDisplayName, setIsDisplayName] = useState(false);
  console.log(name);
  console.log(isDisplayName);

  const handleClick = () => setIsDisplayName(!isDisplayName);

  const test = (num1: number, num2: number) => {
    return num1 + num2;
  };

  console.log(test(2, 6));

  return (
    <div>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setIsDisplayName(!isDisplayName)}>表示非表示切り替え</button>
      <button onClick={handleClick}>表示非表示切り替え</button>
      {isDisplayName && <div>{name}</div>}
    </div>
  );
};

export default Test112;

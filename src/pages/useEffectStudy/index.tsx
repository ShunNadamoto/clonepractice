import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 更新時の処理
    console.log('コンポーネントが更新されました');

    // クリーンアップ関数（アンマウント時に実行される）
    return () => {
      console.log('コンポーネントがアンマウントされました');
    };
  }, [count]); // 依存配列が空の場合、マウント時にのみ実行
  // ...

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* コンポーネントのレンダリング */}
    </div>
  );
};

export default MyComponent;

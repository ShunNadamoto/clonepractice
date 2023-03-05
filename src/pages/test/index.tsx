import type { NextPage } from 'next';
import { Sukiya } from '../../components/Sukiya2';

const Test: NextPage = () => {
  console.log('aaa');
  const caluculation = (a: number, b: number) => {
    return a + b;
  };
  console.log(caluculation(1, 2));
  const caluculation2 = (a: number, b: number) => a - b;
  console.log(caluculation2(2, 1));
  const sum2 = (a: string, b: string) => {
    return `${a}は${b}です。`;
  };
  const sum３ = (a: string, b: string) => `${a}は${b}です。`;
  console.log(sum2('松岡', 'PC音痴'));
  console.log(sum３('松岡', '不器用'));

  const array = [1, 3, 5, 7, 9];
  const newArray = array.map((elem) => elem * 2);
  const array9 = [1, 2, 3, 4];
  console.log(array);
  console.log(newArray);
  const array2 = [2, 4, 6, 8, 10];
  const newArray2 = array2.map((elem) => elem * 3);
  console.log(newArray2);

  return (
    <div>
      <div>新しいページ</div>
      <div>aaaaa</div>
      <div>reaefafad</div>
      <Sukiya
        tagUrlList={[
          'https://www.sukiya.jp/menu/common/img/icon_menu_new.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_new.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_new.png',
        ]}
        menu='aa'
        imgUrl='https://www.sukiya.jp/menu/img/in/photo_gyudon_111400.jpg'
      />
    </div>
  );
};

export default Test;

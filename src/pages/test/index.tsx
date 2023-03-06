import type { NextPage } from 'next';
import { Sukiya } from '../../components/Sukiya2';
import { Yoshinoya } from '../../components/Yoshinoya';

const Test: NextPage = () => {
  const caluculation2 = (a: number, b: number) => a - b;
  console.log(caluculation2(2, 1));
  const sum2 = (a: string, b: string) => {
    return `${a}は${b}です。`;
  };
  const sum３ = (a: string, b: string) => `${a}は${b}です。`;
  console.log(sum2('松岡', 'PC音痴'));
  console.log(sum2('千里さん', '優しい人'));
  console.log(sum2('田中さん', '愛のある指導者'));
  const sum = (a: string, b: string) => `${a}は${b}します。`;
  console.log(sum('松岡', 'プログラミングの勉強を'));

  const array = [1, 2, 3];
  const newArray = array.map((elem) => elem * 2);
  console.log(newArray);

  return (
    <div>
      <div>新しいページ</div>
      <div>aaaaa</div>
      <div>reaefafad</div>
      <Sukiya
        tagUrlList={[
          'https://www.sukiya.jp/menu/common/img/icon_menu_new.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_limited_time.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_recommend.png',
        ]}
        menu='麻辣もやし牛丼'
        imgUrl='https://www.sukiya.jp/menu/img/in/photo_gyudon_111400.jpg'
      />
      <Sukiya
        tagUrlList={['https://www.sukiya.jp/menu/common/img/icon_menu_recommend.png']}
        menu='牛丼'
        imgUrl='https://www.sukiya.jp/menu/img/in/photo_gyudon_100100.jpg'
      />
      <Sukiya
        tagUrlList={[
          'https://www.sukiya.jp/menu/common/img/icon_menu_new.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_limited_time.png',
          'https://www.sukiya.jp/menu/common/img/icon_menu_recommend.png',
        ]}
        menu='麻辣もやし牛丼'
        imgUrl='https://www.sukiya.jp/menu/img/in/photo_gyudon_111400.jpg'
      />
      <Sukiya
        tagUrlList={['https://www.sukiya.jp/menu/common/img/icon_menu_recommend.png']}
        menu='牛丼'
        imgUrl='https://www.sukiya.jp/menu/img/in/photo_gyudon_100100.jpg'
      />
      <div>
        <Yoshinoya
          tag1='NEW'
          tag2='期間限定'
          imgUrl='https://www.yoshinoya.com/wp-content/uploads/2023/02/24201838/teppan_gyu_yakiniku_teisyoku.jpg'
          menu='鉄板牛焼肉定食'
          price1='648円'
          price2='（税込712円)'
        />
        <Yoshinoya
          tag1='NEW'
          tag2='期間限定'
          imgUrl='https://www.yoshinoya.com/wp-content/uploads/2023/02/24201839/teppan_gyu_karubi_teisyoku-1.jpg'
          menu='鉄板牛カルビ定食'
          price1='648円'
          price2='（税込712円)'
        />
      </div>
    </div>
  );
};

export default Test;

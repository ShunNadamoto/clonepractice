import type { NextPage } from 'next';
import { Amazon } from '../../components/Amazon';
import { Sukiya } from '../../components/Sukiya2';
import { Yoshinoya } from '../../components/Yoshinoya';

const Test: NextPage = () => {
  const sum2 = (a: string, b: string) => {
    return `${a}は${b}です。`;
  };

  return (
    <>
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
      <Amazon
        itemImgUrl='https://m.media-amazon.com/images/I/51r5bP4-KLL._AC_SR400,600_.jpg'
        item='伊藤久右衛門 抹茶 ホワイトデー 宇治抹茶いちごチョコレートトリュフ お茶苺さん 抹茶スイーツ ギフト'
        review='⭐︎⭐︎⭐︎⭐︎☆ 3,525'
        sale='47%OFF 特選タイムセール'
        price='￥889 (￥889/個) 参考価格:￥1,690'
        descripution='初回のご注文は送料無料です。詳細'
      />
      <Amazon
        itemImgUrl='https://m.media-amazon.com/images/I/51WrHx-ll4L._AC_.jpg'
        item='伊藤久右衛門 抹茶 ホワイトデー 抹茶生チョコレート尽くし ( 宇治抹茶 ほうじ茶 ) 32粒入'
        review='⭐︎⭐︎⭐︎☆☆ 419'
        sale='20%OFF 特選タイムセール'
        price='￥2,392 (￥2,392/個) 参考価格:￥2,999'
        descripution='詳細'
      />
      <Amazon
        itemImgUrl=' https://m.media-amazon.com/images/I/51MvcPdtU6L._AC_SR400,600_.jpg'
        item='伊藤久右衛門 ホワイトデー 抹茶スイーツ京のはんなり(抹茶いちごトリュフ　抹茶プリン　抹茶チョコレート）詰め合わせ'
        review='⭐︎⭐︎⭐︎☆☆ 218'
        sale='20%OFF 特選タイムセール'
        price='￥2,498 (￥2,498/個) 参考価格:￥3,500'
        descripution='詳細'
      />
      <Amazon
        itemImgUrl='https://m.media-amazon.com/images/I/51rIxZ7YLfL._AC_SR400,600_.jpg
        '
        item='伊藤久右衛門 ホワイトデー 宇治抹茶ほうじ茶ショコラコレクション9種チョコ詰合せ９個入りボンボントリュフ9種セット'
        review='⭐︎⭐︎☆☆☆ 105'
        sale='24%OFF 特選タイムセール'
        price='￥3,192 (￥3,192/個) 参考価格:￥4,200'
        descripution='詳細'
      />
    </>
  );
};

export default Test;

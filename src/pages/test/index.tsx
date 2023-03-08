import type { NextPage } from 'next';
import { Travel } from '..//../components/Travel';
import { Amazon } from '../../components/Amazon';
import { Sukiya } from '../../components/Sukiya2';
import { Yoshinoya } from '../../components/Yoshinoya';
import styles from './index.module.scss';

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
      <div className={styles.yoshinoyaBox}>
        <Yoshinoya
          isDisplayNewTag={true}
          isDisplayLimitedTag={false}
          itemImgUrl='https://www.yoshinoya.com/wp-content/uploads/2023/02/24201838/teppan_gyu_yakiniku_teisyoku.jpg'
          menu='鉄板牛焼肉定食'
          price1='648円'
          price2='（税込712円)'
        />
        <Yoshinoya
          isDisplayNewTag={false}
          isDisplayLimitedTag={true}
          itemImgUrl='https://www.yoshinoya.com/wp-content/uploads/2023/02/24201839/teppan_gyu_karubi_teisyoku-1.jpg'
          menu='鉄板牛カルビ定食'
          price1='648円'
          price2='（税込712円)'
        />
      </div>
      <Amazon />

      <div className={styles.travelBox}>
        <Travel
          ranking='1位'
          place='札幌/北海道'
          imgUrl='https://www.tour.ne.jp/j_special/ranking/images/index_spring/img-spring-area-01.jpg'
          text='雪解けと共に花々が芽吹き出す札幌の春！　ゴールデンウィーク前後には桜が見ごろを迎えます。自然とアートが融合した、美しい景観を楽しめる「モエレ沼公園」や桜と梅が同時に咲く「北海道神宮」など桜スポットは多数。また、札幌駅から車でおよそ50分ほどの国営滝野すずらん丘陵公園では、5月下旬からチューリップが咲き乱れます◎　公園内をレンタサイクルで回り、春の訪れを感じてみましょう♪'
          tagList={[
            'ツアー',
            'ホテル・旅館',
            '航空券',
            '航空券＋ホテル',
            '日帰り旅行・体験プラン',
            'レンタカー',
          ]}
        />
        <Travel
          ranking='2位'
          place='博多/福岡'
          imgUrl='https://www.tour.ne.jp/j_special/ranking/images/index_spring/img-spring-area-02.jpg'
          text='もつ鍋やラーメン、鉄なべ餃子などグルメの宝庫である博多。春の穏やかな風に当たりながら屋台グルメを楽しむのも◎。地元の常連客が比較的多い天神の屋台街は、駅からも近くおすすめです！　ゴールデンウィークには200万人以上の人出でにぎわう伝統行事、「博多どんたく港まつり」が開催される予定です。さまざまな衣装を身にまとった博多どんたく隊が街中を練り歩くパレードは圧巻！　国内でも有数のお祭りを間近で体感しましょう！'
          tagList={[
            'ツアー',
            'ホテル・旅館',
            '航空券',
            '航空券＋ホテル',
            '新幹線＋ホテル',
            '日帰り旅行・体験プラン',
            'レンタカー',
          ]}
        />
      </div>
    </>
  );
};

export default Test;

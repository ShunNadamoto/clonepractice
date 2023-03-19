import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { PizzaHat } from '..//..//components/PizzaHat';
import { Amazon } from '../../components/Amazon';
import { StarBucks } from '../../components/StarBucks';
import { Sukiya } from '../../components/Sukiya2';
import { Travel } from '../../components/Travel';
import { Travel2 } from '../../components/Travel2';
import { Yoshinoya } from '../../components/Yoshinoya';
import styles from './index.module.scss';

const Test: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div>testページ</div>
      <button onClick={() => router.push('/sample')}>sampleページへ</button>
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
          rank={1}
          place='札幌/北海道'
          imgUrl='https://www.tour.ne.jp/j_special/ranking/images/index_spring/img-spring-area-01.jpg'
          descripution='雪解けと共に花々が芽吹き出す札幌の春！　ゴールデンウィーク前後には桜が見ごろを迎えます。自然とアートが融合した、美しい景観を楽しめる「モエレ沼公園」や桜と梅が同時に咲く「北海道神宮」など桜スポットは多数。また、札幌駅から車でおよそ50分ほどの国営滝野すずらん丘陵公園では、5月下旬からチューリップが咲き乱れます◎　公園内をレンタサイクルで回り、春の訪れを感じてみましょう♪'
          tagList={[
            { text: 'ツアー', href: 'https://www.tour.ne.jp/j_tour/list/?dst=1-3-37' },
            {
              text: 'ホテル・旅館',
              href: 'https://www.tour.ne.jp/j_hotel/list/?area1=22&city1=10006&coty1=21&dist1=1',
            },
            {
              text: '航空券',
              href: 'https://www.tour.ne.jp/j_air/list/?arr_in=TYO&arr_out=CTS&dpt_in=CTS&dpt_out=TYO',
            },
            {
              text: '航空券＋ホテル',
              href: 'https://www.tour.ne.jp/j_dp/list/?block=3&carrier=ana&out_airport=HND-CTS&state=1',
            },
            {
              text: '日帰り旅行・体験プラン',
              href: 'https://www.tour.ne.jp/j_optional/list/?area=1-52-5201#sort=15',
            },
            {
              text: 'レンタカー',
              href: 'https://www.tour.ne.jp/j_rentacar/list/?rental_area_id=101&rental_area_type=2&return_area=0',
            },
          ]}
        />
        <Travel2
          rank={1}
          place='aa'
          imgUrl='https://www.tour.ne.jp/j_special/ranking/images/index_spring/img-spring-area-01.jpg'
          descripution='ddddd'
          tagList={[{ text: 'sss', href: 'https://www.tour.ne.jp/j_tour/list/?dst=1-3-37' }]}
        />

        <div>
          <StarBucks
            isDisplayLimitedTag={false}
            itemImgUrl='https://asset.menu.starbucks.co.jp/public/sku_images/4524785526174/4524785526174_11_s.jpg'
            itemName='スターバックスフラペチーノ'
            price='¥690'
          />
          <StarBucks
            isDisplayLimitedTag={false}
            itemImgUrl='https://asset.menu.starbucks.co.jp/public/sku_images/4524785526181/4524785526181_11_s.jpg'
            itemName='クリーミー＆スイート ミルクコーヒー'
            price='¥550〜¥680'
          />
          <StarBucks
            isDisplayLimitedTag={true}
            itemImgUrl='https://asset.menu.starbucks.co.jp/public/sku_images/4524785519268/4524785519268_11_s.jpg'
            itemName='ムース フォーム アイリッシュ コーヒー  ※アイリッシュ コーヒーをイメージしたビバレッジで、アルコールは入っておりません。'
            price='￥900～￥960'
          />
        </div>
        <PizzaHat
          menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_f995051a-ee9f-4ae1-bfa4-17c0e4b91a53.jpg'
          menu='侍・ベストナイン'
          descripution='通常価格[M]3,540円 
ピザハットの人気食材9種類”ベストナイン”を使った4種のピザ。'
        />
        <PizzaHat
          menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_11d972dd-8007-4b4a-a151-c51b16664a90.jpg'
          menu='二刀流！メジャーピザ'
          descripution='通常価格[M]3,540円から
"みみ”が｢チーズ｣と｢ソーセージ｣の二刀流！トマトソース・チーズ・ペパロニのシンプルなトッピングのアメリカンピザ。'
        />
        <PizzaHat
          menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_e0f0bbd9-26b4-479f-98b5-b80304fa591b.jpg'
          menu='ピザハット・マルゲリータ／ジェノバ風ガーリックトマトのH&H
        '
          descripution='通常価格[M]2,485円から

『Double Face』＆『MaM』のオススメピザ！'
        />
      </div>
    </>
  );
};

export default Test;

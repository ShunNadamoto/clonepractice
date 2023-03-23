import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Indeed } from '../../components/Indeed';
import { NanoUniverse } from '../../components/NanoUniverse';
import { PizzaHut } from '../../components/PizzaHut';
import { StarBucks } from '../../components/StarBucks';
import { Sukiya } from '../../components/Sukiya2';
import { Suzume } from '../../components/Suzume';
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

        <div className={styles.starbucksBox}>
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

        <div className={styles.pizzahutBox}>
          <PizzaHut
            menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_f995051a-ee9f-4ae1-bfa4-17c0e4b91a53.jpg'
            menu='侍・ベストナイン'
            descripution='通常価格[M]3,540円 
ピザハットの人気食材9種類”ベストナイン”を使った4種のピザ。'
          />
          <PizzaHut
            menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_11d972dd-8007-4b4a-a151-c51b16664a90.jpg'
            menu='二刀流！メジャーピザ'
            descripution='通常価格[M]3,540円から
"みみ”が｢チーズ｣と｢ソーセージ｣の二刀流！トマトソース・チーズ・ペパロニのシンプルなトッピングのアメリカンピザ。'
          />
          <PizzaHut
            menuImgUrl='https://static.pizzahut.jp/jp/menu/single/desktop_thumbnail_e0f0bbd9-26b4-479f-98b5-b80304fa591b.jpg'
            menu='ピザハット・マルゲリータ／ジェノバ風ガーリックトマトのH&H
        '
            descripution='通常価格[M]2,485円から

『Double Face』＆『MaM』のオススメピザ！'
          />
        </div>

        <div className={styles.nanoUniverseBox}>
          <NanoUniverse
            imgUrl='https://img.store.nanouniverse.jp/img/goods/S/6683118206_010.jpg'
            itemName='セットアップ'
            price='¥22,000'
            isDisplayedNewTag={true}
          />
          <NanoUniverse
            imgUrl='https://img.store.nanouniverse.jp/img/goods/S/6693116301_120.jpg'
            itemName='ジャケット'
            price='¥17,050'
            isDisplayedNewTag={false}
          />
          <NanoUniverse
            imgUrl='	https://img.store.nanouniverse.jp/img/goods/S/6683118204_040.jpg'
            itemName='セットアップ'
            price='¥19,800'
            isDisplayedNewTag={false}
          />
          <NanoUniverse
            imgUrl='	https://img.store.nanouniverse.jp/img/goods/S/6683118205_180.jpg'
            itemName='セットアップ'
            price='¥19,800'
            isDisplayedNewTag={false}
          />
        </div>

        <div>
          <Suzume
            characterImgUrl='	https://suzume-tojimari-movie.jp/assets/images/ver3/character/image1.jpg'
            actorImgUrl='https://suzume-tojimari-movie.jp/assets/images/ver3/character/cast1@2x.jpg?ver=1'
            characterName1='いわとすずめ'
            characterName2='岩戸鈴芽'
          />
          <Suzume
            characterImgUrl='	https://suzume-tojimari-movie.jp/assets/images/ver3/character/image1.jpg'
            actorImgUrl='https://suzume-tojimari-movie.jp/assets/images/ver3/character/cast1@2x.jpg?ver=1'
            characterName1='いわとすずめ'
            characterName2='岩戸鈴芽'
          />
          <Suzume
            characterImgUrl='	https://suzume-tojimari-movie.jp/assets/images/ver3/character/image1.jpg'
            actorImgUrl='https://suzume-tojimari-movie.jp/assets/images/ver3/character/cast1@2x.jpg?ver=1'
            characterName1='いわとすずめ'
            characterName2='岩戸鈴芽'
          />
        </div>
        <div>
          <Indeed
            jobTitle='岡山で働きやすいプログラマー【若手中心】 【第2新卒可】'
            companyName='株式会社システムラボ'
            place='岡山県 岡山市'
            tagList1={['駅近5分以内', '交通費支給']}
            tagList2={['月給27万円〜40万円', '正社員', '休憩60分', 'あああ', 'iiiii']}
            application='プロフィールだけでカンタン応募'
            isDisplayResponseTag={true}
            descripution='仕事内容
            システムラボについて
            【ITシステムの総合相談窓口事業】
            岡山県内の中小企業をメイン顧客としてITシステム導入の相談からソリューション提供まで行っています。'
            sponsor='スポンサー・30+日前'
          />
          <Indeed
            jobTitle='エンジニア'
            companyName='株式会社ユーナ'
            place='岡山県 岡山市 北区'
            tagList1={['交通費支給', '昇給・昇格あり', '在宅OK']}
            tagList2={[
              '月給22万円〜50万円',
              '正社員',
              '年間休日120日以上',
              'aaaa',
              'ss',
              'kkk',
              'eee',
              'rr',
            ]}
            application='この求人にカンタン応募'
            isDisplayResponseTag={false}
            descripution='【仕事内容】
            弊社では IT未経験からスタートしている 先輩社員がたくさんいます。
            実務経験がゼロだけど「IT業界に興味がある」 、「チャレンジしたい」方であれば、 未経験から成長しているんです。'
            sponsor='19時間前'
          />
          <Indeed
            jobTitle='WEBプログラマー、エンジニア'
            companyName='株式会社YMK'
            place='岡山県 岡山市'
            tagList1={['高収入', '交通費支給', '昇給・昇格あり']}
            tagList2={['月給20万円〜35万円', '正社員', '完全週休2日制']}
            application='プロフィールだけでカンタン応募'
            isDisplayResponseTag={true}
            descripution='仕事内容
            PHPやMysqlなどを使いWEBサイトの構築が中心です。
            ご希望に応じて新サービスを作ったり大規模なWEBサービスにジョインすることも可能です。
            自動車、バイクなどでの通勤もできますのでライフスタイルに合わせて仕事ができます。'
            sponsor='スポンサー・30+日前'
          />
        </div>
      </div>
    </>
  );
};

export default Test;

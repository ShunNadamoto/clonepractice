import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.scss';

export default function Home() {
  const [name, setName] = useState('');
  const [isDisplayName, setIsDisplayName] = useState(false);

  return (
    <>
      <>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.container}>
          <div className={styles.container__test1}>練習用</div>
          <div className={styles.container__test2}>練習用サイト2</div>
          <input
            className={styles.container__input}
            placeholder='ここに名前を入力してください'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            onClick={() => setIsDisplayName(!isDisplayName)}
            className={styles.container__button}
          >
            ボタンを押したら名前表示非表示切り替え
          </button>
          {isDisplayName && <div className={styles.container__name}>{name}</div>}
          <div className={styles.container__box}>
            <div className={styles.container__box__text1}>プログラミングで</div>
            <div className={styles.container__box__text1}>人生の安定と収入を手に入れよう</div>
          </div>
        </div>
        <div>
          <div className={styles.test}>奏志記録 サンプルページ</div>
          <img src='child_image.jpeg' alt='奏志七五三画像' className={styles.img__test} />
          <div>奏志写真集</div>
          <p>
            岡山県在住
            <br />
            両親と１歳の妹と仲良く暮らしています。
          </p>
          <br />
          <div>奏志くん生年月日 2018年10月9日生まれ A型 天秤座</div>
          <div>現在は４歳でパズルとベビーバスを観るのが大好きです</div>
          <button>いいね！お願いします</button>
        </div>
        <div className={styles.header}>
          <div className={styles.header__leftBox}>
            <img
              className={styles.header__leftBox__img}
              alt='ロゴ'
              src='https://isara.life/wp-content/themes/isara_v2/img/isaralogo.png'
            />
            <div className={styles.header__leftBox__title}>バンコクのノマドエンジニア育成講座</div>
          </div>
          <button className={styles.header__button}>お問合せ/資料請求はこちら</button>
        </div>
        <div className={styles.header2}>
          <div className={styles.header2__title}>プログラミングで</div>
          <div className={styles.header2__title}>人生の安定を手にいれよう</div>
          <img
            className={styles.header2__img}
            alt='ロゴ'
            src='https://isara.life/wp-content/themes/isara_v2/img/isaralogolarge.png'
          />
          <div className={styles.header2__description1}>バンコクのノマドエンジニア育成講座</div>
          <div className={styles.header2__description2}>iSara[イサラ]</div>
        </div>
        <div className={styles.header__leftBox__title}>バンコクのノマドエンジニア育成講座</div>
        <div className={styles.header2__description2}>iSara[イサラ]</div>
        <img
          className={styles.header2__img}
          alt='ロゴ'
          src='https://isara.life/wp-content/themes/isara_v2/img/isaralogolarge.png'
        />
        <div>
          <button>
            <img src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E' />
            ツイッター
          </button>
        </div>
        <div className={styles.container2}>
          <div className={styles.container2__text1}>まずは２０日間で、</div>
          <div className={styles.container2__text2}>月１０万円稼げるスキルを手にいれよう。</div>

          <div className={styles.container2__text3}>
            ※受講料金は実質０円です。詳しくは資料請求をどうぞ。
          </div>
          <button className={styles.container2__button}> お問い合わせ＆資料請求はこちら</button>
          <div className={styles.container2__text4}>
            第6期生:2019年11月25日 ~ 2019年12月14日*締め切りました
          </div>
          <div className={styles.container2__text4}>
            第7期生:2020年2月17日 ~ 2020年3月7日*締め切りました
          </div>
          <div className={styles.container2__text4}>第８期生：次回の募集は未定です</div>
          <div className={styles.container2__buttonBox}>
            <button className={styles.container2__buttonBox__button1}>
              <img
                className={styles.container2__buttonBox__button1__img}
                src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E'
              />
              ツイート
            </button>
            <button className={styles.container2__buttonBox__button2}>
              <img
                className={styles.container2__buttonBox__button2__img}
                src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/FEppCFCt76d.png'
              />
              いいね
            </button>
            <button className={styles.container2__buttonBox__button3}>シェアする</button>
          </div>
          <br></br>

          <div className={styles.container2__buttonBox2}>
            <button className={styles.container2__buttonBox2__button1}>
              <img
                className={styles.container2__buttonBox2__button1__img}
                src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E'
              />
              ツイート
            </button>
            <button className={styles.container2__buttonBox2__button2}>
              <img
                className={styles.container2__buttonBox2__button2__img}
                src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/FEppCFCt76d.png'
              />
              いいね！
            </button>
            <button className={styles.container2__buttonBox2__button3}>シェアする</button>
          </div>
          <br></br>

          <div className={styles.container2__buttonBox3}>
            <button className={styles.container2__buttonBox3__button1}>
              <img
                className={styles.container2__buttonBox2__button1__img}
                src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E'
              />
              ツイート
            </button>
            <button className={styles.container2__buttonBox3__button2}>
              <img
                className={styles.container2__buttonBox2__button2__img}
                src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/FEppCFCt76d.png'
              />
              いいね！
            </button>
            <button className={styles.container2__buttonBox3__button3}>シェアする</button>
          </div>
        </div>
        <div className={styles.introduction}>
          <div className={styles.introduction__description}>
            <div className={styles.introduction__description__leftIcon} />
            <div className={styles.introduction__description__rightIcon} />
            エンジニアとして本当の自由を手に入れるためには？
          </div>
        </div>
        <div className={styles.introduction2}>
          <div className={styles.introduction2__description}>
            <div className={styles.introduction2__description__leftIcon} />
            <div className={styles.introduction2__description__rightIcon} />
            エンジニアとして本当の自由を手に入れるためには？
          </div>

          <div className={styles.introduction2__content}></div>
          <div className={styles.introduction2__content__text1}>
            エンジニア需要の高まりに伴い、プログラミングスクールが増えています。
            <br></br>
            しかしそこでの学習の先は、 提携して決められた就職先に就職すること。
          </div>
          <br></br>
          <div className={styles.introduction2__content__text2}>
            これで本当にいいのですか？
            <br></br>日本人エンジニアはアメリカと較べて給料が格段に低い。
            <br></br>
            その理由がここにあり、 エンジニアは自分の給料をコントロールすべきなのです。
          </div>
          <br></br>
          <div className={styles.introduction2__content__text3}>
            スキルを身につけたエンジニアは、人生をコントロールすることでより自由に。
            <br></br> そこで必要なのが
            {<span className={styles.introduction2__content__text3__text4}>「稼ぐ力」</span>}
            です。
          </div>
        </div>
      </>
      <div className={styles.about}>
        <div className={styles.about__Icon}>
          <p className={styles.about__Icon__circle1}>ABOUT</p>
        </div>
        <div className={styles.about__title}>
          <div className={styles.about__title__leftIcon} />
          <div className={styles.about__title__rightIcon} />
          ノマドエンジニア育成講座 <br></br>iSara[イサラ]とは
        </div>
        <div className={styles.about__text}>
          「 稼ぐこと 」にフォーカスしたWebエンジニア育成講座です。
        </div>
        <div className={styles.about__box}>
          <div className={styles.about__intext}>稼げるエンジニアに必要な５つのスキルとは？</div>

          <div className={styles.about__box__contentBox1}>
            <img src='https://isara.life/wp-content/themes/isara_v2/img/skill.jpg'></img>
            <div className={styles.about__box__contentBox1__text}>
              基礎的な
              <br></br>
              プログラミングスキル
            </div>
          </div>
          <div className={styles.about__box__contentBox2}>
            <img src='https://isara.life/wp-content/themes/isara_v2/img/sales.jpg'></img>
            <div className={styles.about__box__contentBox1__text}>
              案件獲得に必要な
              <br></br>
              営業力
            </div>
          </div>
          <div className={styles.about__box__contentBox3}>
            <img src='https://isara.life/wp-content/themes/isara_v2/img/document.jpg'></img>
            <div className={styles.about__box__contentBox1__text}>
              見積もり作成から
              <br></br>
              納品までの知識
            </div>
          </div>
          <div className={styles.about__box__contentBox4}>
            <img src='https://isara.life/wp-content/themes/isara_v2/img/plusone.jpg'></img>
            <div className={styles.about__box__contentBox1__text}>
              自分の付加価値を
              <br></br>
              高めるスキル
            </div>
          </div>
          <div className={styles.about__box__contentBox5}>
            <img src='https://isara.life/wp-content/themes/isara_v2/img/connection.jpg'></img>
            <div className={styles.about__box__contentBox1__text}>
              フリーランス同士の
              <br></br>
              横のつながり
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

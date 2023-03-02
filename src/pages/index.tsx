import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AccordionMenu } from '../components/AccordionMenu';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { IntroductionCard } from '../components/IntroductionCard';
import { MeritCard } from '../components/MeritCard';
import { Profile } from '../components/Profile';
import { sum } from '../lib/tool';
import styles from './index.module.scss';

export default function Home() {
  const [name, setName] = useState('');
  const [isDisplayName, setIsDisplayName] = useState(false);

  useEffect(() => {}, []);

  const calculationAdd = (a: number, b: number) => {
    return a + b;
  };

  const aaaa = (test1: number, test2: number, test3: number) => {
    return test1 + test2 + test3;
  };

  const calculation = (text1: string, text2: string) => {
    return text1 + text2;
  };
  console.log(calculation('千里さん', 'いつも助かります'));
  const calculation2 = (a: number, b: number) => {
    return a + b;
  };
  console.log(calculation('田中さん', 'お世話になっております。'));
  console.log(calculation('賀門さん', 'ご心配おかけします。'));
  console.log(calculation('奏志くん', '可愛いね。'));
  console.log(calculation('史佳ちゃん', 'ちゃんとご飯食べようね'));
  console.log(calculation('みかん', '売り切れました。'));
  const calculation6 = (a: number, b: number, c: number): number => {
    return a + b + c;
  };
  console.log(calculation6(1, 4, 6));
  console.log(calculation6(3, 6, 12));

  const calculation7 = (a: number, b: number, c: number) => {
    return a + b + c;
  };
  console.log(calculation7(2, 7, 14));
  const caluculation8 = (a: number, b: number, c: number) => {
    return a * b * c;
  };
  console.log(caluculation8(2, 4, 5));
  console.log(caluculation8(3, 5, 6));
  console.log(caluculation8(4, 7, 8));

  const calculation9 = (a: string, b: string, c: string) => {
    return a + b + c;
  };
  console.log(calculation9('中華', 'そば', '始めました'));
  console.log(calculation9('今年の', '冬は', '暖冬です。'));
  console.log(calculation9('松岡の', 'PCスキルは', '大学生以下'));
  console.log(calculation9('チョコレート', 'やっぱり', '美味しいね！'));

  const calculation3 = (a: number, b: number) => {
    return a - b;
  };
  console.log(calculation3(8, 2));
  const calculation4 = (a: number, b: number) => {
    return a * b;
  };
  console.log(calculation4(8, 2));

  const calculation5 = (a: number, b: number) => {
    return a / b;
  };
  console.log(calculation5(8, 2));

  const array3 = [3, 6, 9, 12, 15, 18];
  const newArray3 = array3.map((elem) => {
    return elem;
  });
  console.log(newArray3[0]);

  const array = [1, 2, 3, 4, 5, 6];
  const newArray = array.map((elem) => {
    return elem;
  });
  console.log(array[4]);
  console.log(array[2]);
  console.log(newArray[4]);

  const newArray2 = array.filter((elem) => {
    return elem < 4;
  });
  console.log(newArray2);

  const array4 = [2, 4, 6, 8, 10];
  const newArray4 = array4.map((elem) => {
    return elem;
  });
  console.log(newArray4);

  const array5 = [3, 6, 9, 12, 15];
  const newArray5 = array5.map((elem) => {
    return elem;
  });
  console.log(newArray5);
  console.log(newArray5, [4]);

  const calculateion = (test: number, test2: number) => {
    return test - test2;
  };

  const questionResponse = {
    questionList: [
      {
        text: 'プログラミングスキルは必要ですか?',
        description:
          'いいえ、必要ありません。しかし、iSaraでは参加費以上の金額が稼げることを保障しています。 従って、事前通話面談時点で簡単なテストを実施し、場合によってはお断りをしております。この点だけはご了承ください。',
      },
      {
        text: '参加費以上に稼げなかったらどうなりますか?',
        description:
          '宿泊費用が必要ですが、iSara提携のホステルに宿泊することになりますので心配はありません。',
      },
      {
        text: '滞在中の宿泊先はどうなりますか?',
        description:
          '宿泊費用が必要ですが、iSara提携のホステルに宿泊することになりますので心配はありません。',
      },
      { text: 'aaa', description: 'cccc' },
      { text: 'aaa', description: 'cccc' },
      { text: 'aaa', description: 'cccc' },
    ],
  };

  const test2 = { test: 'aaaa', value2: [1, 3], value3: { value3: 'aaa' } };

  const { questionList } = questionResponse;

  const test = questionResponse.questionList.map((elem) => {
    return elem.description;
  });

  console.log(test);

  type Human = { id: string; name: string; age: number };
  const humans: Human[] = [
    { id: '1', name: '斉藤', age: 20 },
    { id: '2', name: '中島', age: 21 },
    { id: '3', name: '山田', age: 50 },
  ];
  const HumanTag: React.FC = () => {
    return (
      <>
        {humans.map((human) => {
          return (
            <div key={human.id}>
              {human.name}さんは{human.age}歳です。
            </div>
          );
        })}
      </>
    );
  };

  console.log(humans[0]);

  const HamburgerResponse = {
    HamburgerList: [
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010611/010611_5.jpg',
        menuIcon2: 'https://www.mos.jp/img/sp/menu/icon/ic_termLimited.gif',
        title: 'ハニマスのとり竜田（たつた）バーガー ～ハニーマスタードソース使用～',
        price: '¥450',
        isDisplayLimitedIcon: true,
      },
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010815/010815_5.jpg',
        menuIcon2: 'https://www.mos.jp/img/sp/menu/icon/ic_termLimited.gif',
        title: '和風旨（うま）だれのとり竜田（たつた）バーガー ～くし切りレモン添え～',
        price: '¥410',
        isDisplayLimitedIcon: true,
      },
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010004/010004_5.jpg',
        menuIcon2: 'https://www.mos.jp/img/sp/menu/icon/ic_termLimited.gif',
        title: 'チキンバーガー',
        price: '¥320',
        isDisplayLimitedIcon: false,
      },
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010320/010320_5.jpg',
        menuIcon2: 'visibility-hidden',
        title: 'モスバーガー',
        price: '¥410',
        isDisplayLimitedIcon: false,
      },
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010340/010340_5.jpg',
        menuIcon2: '',
        title: 'モスチーズバーガー',
        price: '¥440',
        isDisplayLimitedIcon: false,
      },
      {
        menuIcon: '期間限定',
        hamburgerImgUrl: 'https://www.mos.jp/img/menu/010350/010350_5.jpg',
        menuIcon2: '',
        title: 'スパイシーモスバーガー',
        price: '¥440',
        isDisplayLimitedIcon: false,
      },
    ],
  };

  const profileResponse = {
    profileList: [
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000271/original_thumbnail_%282%29.png?1674531414',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000271/original_%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEI-ne_logo_%281%29.png?1674120838',
        title:
          '「BOTANIST」や「SALONIA」を手掛けるI-ne。ecforceで新しいEC施策を実行しながらシステムコストカットに成功。',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: '株式会社Ｉ－ｎｅ（アイエヌイー）',
        tagList: ['システムの機能不備を解消したい', '運用コストを削減したい'],
      },
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000068/original_image.png?1664360942',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000068/original_%E3%82%BB%E3%83%B3%E3%83%88%E3%82%99%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE.png?1664360942',
        title:
          '「5年後も選ばれるブランドになるために」 ウェルネスブランド『cinque』が選んだecforceの定期コース機能',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: 'センドグループ株式会社',
        tagList: ['システムの機能不備を解消したい'],
      },
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000271/original_thumbnail_%282%29.png?1674531414',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000271/original_%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEI-ne_logo_%281%29.png?1674120838',
        title:
          '「BOTANIST」や「SALONIA」を手掛けるI-ne。ecforceで新しいEC施策を実行しながらシステムコストカットに成功。',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: '株式会社Ｉ－ｎｅ（アイエヌイー）',
        tagList: ['システムの機能不備を解消したい', '運用コストを削減したい'],
      },
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000068/original_image.png?1664360942',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000068/original_%E3%82%BB%E3%83%B3%E3%83%88%E3%82%99%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE.png?1664360942',
        title:
          '「5年後も選ばれるブランドになるために」 ウェルネスブランド『cinque』が選んだecforceの定期コース機能',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: 'センドグループ株式会社',
        tagList: ['システムの機能不備を解消したい'],
      },
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000271/original_thumbnail_%282%29.png?1674531414',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000271/original_%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEI-ne_logo_%281%29.png?1674120838',
        title:
          '「BOTANIST」や「SALONIA」を手掛けるI-ne。ecforceで新しいEC施策を実行しながらシステムコストカットに成功。',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: '株式会社Ｉ－ｎｅ（アイエヌイー）',
        tagList: ['システムの機能不備を解消したい', '運用コストを削減したい'],
      },
      {
        profileImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/pictures/100000068/original_image.png?1664360942',
        brandImgUrl:
          'https://faq-system.s3.amazonaws.com/information_assets/information/company_pictures/100000068/original_%E3%82%BB%E3%83%B3%E3%83%88%E3%82%99%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE.png?1664360942',
        title:
          '「5年後も選ばれるブランドになるために」 ウェルネスブランド『cinque』が選んだecforceの定期コース機能',
        industryName: 'パーソナルケア / ヘアケア',
        companyName: 'センドグループ株式会社',
        tagList: ['システムの機能不備を解消したい'],
      },
    ],
  };

  return (
    <>
      <>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className={styles.content}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {HamburgerResponse.HamburgerList.map((eachHamburger, index) => {
              return (
                <HamburgerMenu
                  key={index}
                  menuIcon={eachHamburger.menuIcon}
                  hamburgerImgUrl={eachHamburger.hamburgerImgUrl}
                  menuIcon2={eachHamburger.menuIcon2}
                  title={eachHamburger.title}
                  price={eachHamburger.price}
                  isDisplayLimitedIcon={eachHamburger.isDisplayLimitedIcon}
                />
              );
            })}
          </div>
        </div>
        <HumanTag />
        {humans.map((human) => {
          return (
            <div key={human.id}>
              {human.name}さんは{human.age}歳です。
            </div>
          );
        })}

        <div className={styles.container}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {profileResponse.profileList.map((eachProfile, index) => {
              return (
                <Profile
                  key={index}
                  profileImgUrl={eachProfile.profileImgUrl}
                  brandImgUrl={eachProfile.brandImgUrl}
                  title={eachProfile.title}
                  industryName={eachProfile.industryName}
                  companyName={eachProfile.companyName}
                  tagList={eachProfile.tagList}
                />
              );
            })}
          </div>
          <div className={styles.accordionWrapper}>
            {questionResponse.questionList.map((elem, index) => (
              <AccordionMenu key={index} text={elem.text} description={elem.description} />
            ))}
          </div>
          <div className={styles.container__test1}>練習用</div>
          <div className={styles.container__test2}>練習用サイト2</div>
          <input
            className={styles.container__input}
            placeholder='ここに名前を入力してください'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button
            onClick={() => {
              const total = sum(1, 2);
              console.log(total);
              setIsDisplayName(!isDisplayName);
            }}
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
      <div className={styles.about2}>
        <div className={styles.about2__text1}>
          iSaraで「基本的なプログラミングスキル」は教えません
        </div>
        <div className={styles.about2__text2}>基礎的なプログラミングスキルは無料で学べる時代。</div>
        <div className={styles.about2__text3}>
          iSaraでは、基礎知識学習は
          <span className={styles.about2__text3__yellow}>事前課題</span>
          <span>と</span>
          <span className={styles.about2__text3__yellow}>チャットサポート</span>
          <span>のみ。</span>
        </div>

        <div className={styles.about2__content}>
          <div className={styles.about2__content__contentBox1}>
            <p className={styles.about2__content__contentBox1__STEP}>STEP.1</p>
            <p className={styles.about2__content__contentBox1__text1}>【バンコク渡航前１ヶ月】</p>
            <p className={styles.about2__content__contentBox1__text2}>事前課題で基礎知識を学ぶ</p>
          </div>

          <div className={styles.about2__content__contentBox2}>
            <p className={styles.about2__content__contentBox2__STEP}>STEP.2</p>
            <p className={styles.about2__content__contentBox2__text1}>【バンコク到着後】</p>
            <p className={styles.about2__content__contentBox2__text2}>
              実践的に稼ぐことに特化した学習
            </p>
          </div>
          <div className={styles.about2__content__contentBox3}>
            <p className={styles.about2__content__contentBox3__STEP}>STEP.3</p>
            <p className={styles.about2__content__contentBox3__text1}>【バンコク帰国後】</p>
            <p className={styles.about2__content__contentBox3__text2}>
              講座実施後の案件獲得サポート
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about3}>
        <div className={styles.about3__text1}>
          スキルアップしてもフリーランスエンジニアとして食べていくことは難しい。
        </div>
        <div className={styles.about3__text2}>
          フリーランスには
          <span className={styles.about3__text3}>プログラミングスキル以外</span>が大切。
        </div>
      </div>
      <div className={styles.study}>
        <div className={styles.study__title}>
          iSara
          <span className={styles.study__title__text}>[イサラ]</span>
          で学べること
        </div>
        <div className={styles.study__title2}>
          iSaraの学習では、エンジニアとして「稼ぐ」ために必要な能力を身につけます。
        </div>
        <div className={styles.study__studybox}>
          <img src='https://isara.life/wp-content/themes/isara_v2/img/salesskill.jpg' />
          <img src='https://isara.life/wp-content/themes/isara_v2/img/knowledge.jpg' />
          <img src='https://isara.life/wp-content/themes/isara_v2/img/skillup.jpg' />
          <img src='https://isara.life/wp-content/themes/isara_v2/img/freelanceconnection.jpg' />
        </div>
        <div className={styles.study__text}>これらを教えるのがiSaraです。</div>
      </div>
      <div className={styles.merit}>
        <div className={styles.merit__description}>
          <div className={styles.merit__description__text1}>
            他のプログラミングスクールとここが違う！
            <div className={styles.merit__description__leftIcon} />
            <div className={styles.merit__description__rightIcon} />
            <div className={styles.merit__description__text2}>iSara[イサラ]の３つのメリット</div>
          </div>
        </div>
        <div className={styles.merit__box}>
          <div className={styles.merit__box__inbox1}>
            <MeritCard
              imageUrl='https://isara.life/wp-content/themes/isara_v2/img/learnfromfreelancer.jpg'
              text1='現役フリーランスから学べる'
              text2='他のプログラミングスクールとは違い、実際にフリーランスとして活動しているエンジニアが直接講師を勤めます。'
            />
          </div>
          <div className={styles.merit__box__inbox2}>
            <MeritCard
              imageUrl='https://isara.life/wp-content/themes/isara_v2/img/learnfromprojects.jpg'
              text1='実践を通じて学べる'
              text2='フリーランスにとって最短の学習方法は「実践」。iSaraでは実案件を通して学びます。現役フリーランサーの案件サポートに加え、クラウドソーシングを活用。初心者の自分じゃ無理と思うかもですが、現役フリーランスがサポートしますので大丈夫。'
            />
          </div>
          <div className={styles.merit__box__inbox3}>
            <MeritCard
              imageUrl='https://isara.life/wp-content/themes/isara_v2/img/actuallyfree.jpg'
              text1='授業料が実質０円'
              text2='講座費用258,000円以上の金額が稼げるまで「永久サポート延長」があります。'
            />
          </div>
        </div>

        <div className={styles.support}>
          <div className={styles.support__title}>さらに！帰国後もサポート付き</div>
          <div className={styles.support__text1}>
            リモートワーカーのチームを作ることで受注率、受注単価が大幅に向上します。
          </div>
          <div className={styles.support__text2}>
            iSaraは講座が終わって終了ではありません。
            <br></br>
            参加メンバーのチャットグループを作り、帰国後も継続的に案件参加できるようになります。
            <br></br>
            また、チームで働くことで継続的に稼ぎやすい仕組みづくりも構築しております。
          </div>
        </div>
        <div className={styles.bottom}>
          事前課題ができない人はお断りしております。iSaraでは、無料で学べるプログラミング基礎知識は教えません。事前課題一覧はメールで送りつつ、
          <br></br>
          チャットサポートのみ。従って、本気で取り組まないと結果は出ません。
        </div>
      </div>

      <div className={styles.member}>
        <div className={styles.member__title}>
          <img src='id_card_icon_144637.png' width='60' height='60' />
          創業メンバー
        </div>
        <div className={styles.member__introduction}>
          <IntroductionCard
            imageUrl='https://isara.life/wp-content/themes/isara_v2/img/keisuke_someya.jpg'
            altName='染谷 佳佑'
            text1='フリーランス講師'
            text2='染谷 佳佑'
            text3='ISARA（THILAND）
            CO.,LTD.の代表です。学生起業の後にリクルートに就職、その後独立し、海外移住しました。今はフリーランスとしてリモートワークで日本円を稼ぎ、外国通貨に変えて使い、海外を旅してます。営業、ブログPVアップ(最高月間150万PV)、ビジネス構築が専門です。'
          />
          <IntroductionCard
            imageUrl='https://isara.life/wp-content/uploads/2018/10/yuki.png'
            altName='成田 雄輝'
            text1='フリーランス講師'
            text2='成田 雄輝'
            text3='バンコクのシェアハウスのオーナーをやりながら一年の大半をタイで過ごしています。大学時代から今に至るまでネットだけで生計を立てているので、自由歴だけは講師陣の中で最長です！母親がタイ人という事もありタイには精通してますので、こちらでの生活のサポートはお任せください！'
          />
          <IntroductionCard
            imageUrl='https://isara.life/wp-content/themes/isara_v2/img/manabu.png'
            altName='坂内 学'
            text1='フリーランスエンジニア'
            text2='坂内 学'
            text3='アドバイザーとして参画しました。新卒で海外就職して１１ヶ月後に退職。今は日本にいたり海外にいたりでゆるくフリーランスをしています。
              お仕事はWebマーケティングとプログラミングが専門領域です。'
          />
        </div>
      </div>
    </>
  );
}

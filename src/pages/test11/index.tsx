import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Demaecan } from '../../components/Demaecan';
import styles from './index.module.scss';
import { Indeed2 } from '@/components/Indeed2';
import { Indeed3 } from '@/components/Indeed3';

type Person = {
  name: string;
  age: string;
  note: string;
  registerDate: string;
};

const Test11: NextPage = () => {
  const router = useRouter();
  const [name, setNewName] = useState('');
  const [age, setNewAge] = useState('');
  const [note, setNewNote] = useState('');
  const [personList, setPersonList] = useState<Person[]>([]);
  const [refetchPersonList, setRefetchPersonList] = useState(false);
  // console.log(personList);
  const [name2, setName2] = useState('');
  const [isDisplayName, setIsDisplayName] = useState(false);

  const resetInput = () => {
    setNewName('');
    setNewAge('');
    setNewNote('');
  };

  useEffect(() => {
    const getPersonList = async () => {
      const res = await axios.get('https://umayadia-apisample.azurewebsites.net/api/persons');
      setPersonList(res.data.data);
    };
    getPersonList();
  }, [refetchPersonList]);
  // console.log(personList);

  // const filteredPersonList = personList.filter((elem) => elem.name === '織田信長');

  return (
    <>
      <div>
        {personList
          .filter((elem) => Number(elem.age) < 21) //personlistからfiterで絞り込む
          .map(
            (
              elem,
              index, //上で絞り込んだ配列をmapで値を返す
            ) => (
              <div key={index}>
                <div>{elem.name}</div>
                <div>{elem.age}</div>
                <div>{elem.note}</div>
                <div>{elem.registerDate}</div>
              </div>
            ),
          )}
      </div>

      <div>
        <input
          type='text'
          value={name}
          placeholder='名前を入力'
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type='text'
          value={age}
          placeholder='年齢を入力'
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input
          type='text'
          value={note}
          placeholder='記事欄を入力'
          onChange={(e) => setNewNote(e.target.value)}
        />
      </div>

      <button
        onClick={() => {
          axios
            .post('https://umayadia-apisample.azurewebsites.net/api/persons', {
              name: name,
              age: Number(age),
              note: note,
              registerDate: '0214-03-03T04:14:25',
            })
            .then(() => {
              setRefetchPersonList(!refetchPersonList);
              resetInput();
            })
            .catch((error) => console.log(error));
        }}
      >
        新規に登録する
      </button>

      <div>
        <Demaecan
          menuImgUrl='https://cdn.demae-can.com/files/imgix/item720/kHHf0mnS/l2_IS7k0k10001.jpg?imwidth=256'
          restaurantName='ココス古京店'
          evaluation='⭐︎3.8'
          minimumPrice='1円からお届け'
          demaecanTagList={[{ img: 'demaecan', name: '出前館がお届け' }]}
          deliveryTime='15-30'
        />
      </div>

      <input
        className={styles.container__input}
        placeholder='ここに名前を入力して'
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        onClick={() => {
          setIsDisplayName(!isDisplayName);
        }}
      >
        ボタンを押したら名前表示非表示切替
      </button>

      <div>
        <Indeed2
          jobName='システムエンジニアプログラマー'
          companyName='倉敷電子工業株式会社'
          workPlace='岡山県 倉敷市球場前駅'
          tagList1={['駅近徒歩10分', '交通費不支給', 'aaa']}
          tagList2={[
            { title: '月給iii', logoType: 'salery' },
            { title: '正社員', logoType: 'jobType' },
            { title: '年間休日120日以上', logoType: 'time' },
            { title: 'eee', logoType: 'ttt' },
          ]}
          application='この求人にカンタン応募'
          isDisplayTag={false}
          descripution='仕事内容
        システムラボについて
        【ITシステムの総合相談窓口事業】
        岡山県内の中小企業をメイン顧客としてITシステム導入の相談からソリューション提供まで行っています。'
          sponsor='スポンサー・30+日前'
        />
      </div>
      <div>
        <Indeed3
          isdisplayNewText={true}
          jobName='社内Webプログラマー'
          companyName='株式会社タグチ工業'
          workPlace='岡山県 岡山市 北区'
          tagList1={['急募', '交通費支給', '昇給・昇格あり']}
          tagList2={[
            { name: '月給21万円〜35万円', imgLogo: 'salely' },
            { name: '正社員', imgLogo: 'jobType' },
            { name: '平日のみOK', imgLogo: 'workTime' },
            { name: 'eee', imgLogo: 'ttt' },
          ]}
          application='プロフィールだけでカンタン応募'
          isdisplayResponseTag={true}
          descripution='*仕事内容: * タグチグループは建設機械アタッチメントの開発・設計・製造・販売・レンタルまで自社で行なっており、必要なシステムは内製しています。システム部門では自分が作ったシステムを社内の仲間に使ってもらい、スピーディーな改善を重ねながら業務に適した仕様へと仕上げます。 社内の各部署から要望を聞き、オリジナルのシステムを一から開発するシステム部門。 主な業務は、 ・社内業務システム開発 ・イン...'
          recruitingDate='5日前'
        />
      </div>
    </>
  );
};

export default Test11;

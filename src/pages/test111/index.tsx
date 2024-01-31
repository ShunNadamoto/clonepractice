import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { AccordionMenu } from '@/components/AccordionMenu';
import { Profile2 } from '@/components/Profile2';

const Test111: NextPage = () => {
  const testData = [
    { id: 1, name: 'aaa', age: 2, isExcelent: true },
    { id: 2, name: 'iii', age: 3, isExcelent: true },
    { id: 3, name: 'success', age: 2, isExcelent: false },
    { id: 4, name: 'iii', age: 3, isExcelent: true },
    { id: 5, name: 'aaa', age: 2, isExcelent: false },
    { id: 6, name: 'iii', age: 3, isExcelent: true },
    { id: 7, name: 'aaa', age: 2, isExcelent: false },
    { id: 8, name: 'iii', age: 3, isExcelent: true },
    { id: 9, name: 'aaa', age: 2, isExcelent: false },
    { id: 10, name: 'iii', age: 3, isExcelent: true },
  ];

  const testData2 = { id: 1, name: 'aaaa', age: 2 };

  const [personList, setPersonList] = useState([]);

  console.log(testData2.id, testData2.name, testData2.age);

  const testData3 = { exam1: 'test', exam2: 3, exam3: 111 };
  console.log(testData3.exam3);

  const testArray3 = [1, 3, 65];

  const testArray = [1, 2, 3, 4, 5];
  const maptest = testArray.map((elem) => elem * 5).filter((elem) => elem < 13);
  console.log(maptest);

  const maptest2 = testArray.map((elem) => {
    console.log(elem);
    return elem * 9;
  });
  console.log(maptest2);

  const filterTest = testArray.filter((elem) => {
    console.log(elem);
    return elem < 4;
  });
  console.log(maptest);
  console.log(filterTest);

  const maptest3 = testArray.map((elem, index) => {
    console.log(index);
    return elem * 9;
  });

  useEffect(() => {
    console.log('useEffect');
  }, []);

  const test = ['aaa', 'iii', 'uuu', 'eee'];

  return (
    <div className={styles.container}>
      check!
      <AccordionMenu text='これはどういうことですか？' description='こういうことですよ' />
      {testData.map((elem) => (
        <Profile2
          key={elem.id}
          name={elem.name}
          age={elem.age}
          isDisplayExcelent={elem.isExcelent}
        />
      ))}
      <Profile2 name='aaaa' age={14} isDisplayExcelent />
      <div className={styles.container__header}>header</div>
      <button className={styles.container__button}>押してください</button>
      <div className={styles.container__positionSample}>
        <div className={styles.container__positionSample__absolute}>absolute</div>
      </div>
      {testData.map((elem, index) => {
        return (
          <div key={index}>
            <div>なまえ：{elem.name}</div>
            <div>年齢：{elem.age}</div>
          </div>
        );
      })}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
      {testData.map((elem) => {
        return <div key={elem.id}>{elem.name}</div>;
      })}
      {testData.map((elem) => {
        return <div key={elem.id}>{elem.name}</div>;
      })}
      {testData.map((elem) => {
        return <div key={elem.id}>{elem.name}</div>;
      })}
      {testData.map((elem) => {
        return <div key={elem.id}>{elem.name}</div>;
      })}
      {testData.map((elem) => {
        return <div key={elem.id}>{elem.name}</div>;
      })}
      <div className={styles.container__flexBox}>
        {/* const test = ['aaa', 'iii', 'uuu', 'eee']; */}

        {test.map((elem, index) => (
          <div key={index} className={styles.container__flexBox__item}>
            {elem}
          </div>
        ))}
        <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iii</div>
        <div className={styles.container__flexBox__item}>uuu</div>
        <div className={styles.container__flexBox__item}>eee</div>
        {/* <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iiii</div>
        <div className={styles.container__flexBox__item}>uuuu</div>
        <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iiii</div>
        <div className={styles.container__flexBox__item}>uuuu</div>
        <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iiii</div>
        <div className={styles.container__flexBox__item}>uuuu</div>
        <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iiii</div>
        <div className={styles.container__flexBox__item}>uuuu</div>
        <div className={styles.container__flexBox__item}>aaa</div>
        <div className={styles.container__flexBox__item}>iiii</div>
        <div className={styles.container__flexBox__item}>uuuu</div> */}
      </div>
    </div>
  );
};

export default Test111;

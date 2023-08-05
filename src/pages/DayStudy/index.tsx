import { NextPage } from 'next';

const sum = (num1: number, num2: number) => num1 + num2;
console.log(sum(1, 4));

const person = (name: string, age: number): string => {
  return `${name}さんは${age}歳です`;
};

const numberList = [1, 2, 3];
const [num1, num2, num3] = numberList;
console.log(num1, num2, num3);

const person2 = { name: 'aaa', sex: '男' };
console.log(person2.name);

const drinks = [['オレンジジュース', '牛乳', 'コーラ']];
console.log(drinks[1][0]);

const people = [
  { name: 'aaa', age: 10, sex: '男' },
  { name: 'bbb', age: 20, sex: '女' },
];
console.log(people[0].name);
console.log(people[1].sex);

const foods_group = {
  vegetables: ['きゅうり', 'トマト', 'ジャガイモ'],
  fruits: ['みかん', 'りんご', 'ばなな'],
};
console.log(foods_group.fruits[2]);

const presons = {
  Tanaka: { age: 20, sex: '男' },
  Goto: { age: 25, sex: '女' },
};
console.log(presons.Goto.age);

const DayStudy: NextPage = () => {
  return <></>;
};

export default DayStudy;

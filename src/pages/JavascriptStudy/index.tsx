import type { NextPage } from 'next';

//要素の追加関数
//push():配列の末尾に要素を追加
const myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray);

//unshift():配列の先頭に要素を追加
const myArray2 = [1, 2, 3];
myArray2.unshift(0);
console.log(myArray2);

//concat()：既存の配列と別の配列または要素を結合し、新しい配列を作成
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const comibinedArray = array1.concat(array2);
console.log(comibinedArray);

//要素の削除メソッド
//pop():配列から最後の要素を削除し、その要素を返す
const myArray3 = [1, 3, 5];
const removeElement = myArray3.pop();
console.log(removeElement);

//shift():配列から最初の要素を削除し、その要素を返す
const myArray4 = [2, 4, 6];
const firstELement = myArray4.shift();
console.log(firstELement);
console.log(myArray4);

//slice():新しい配列を生成し、元の配列の一部を抽出してコピーする
let originArray = [1, 2, 3, 4, 5];
let newArray = originArray.slice(1, 5);
console.log(newArray);

//splice():指定された位置から要素を削除または挿入する
const myArray5 = [1, 2, 3, 4, 5];
const spliceElement1 = myArray5.splice(0, 3);
console.log(spliceElement1);
console.log(myArray5);
const spliceELement2 = myArray5.splice(0, 2);
console.log(spliceELement2);
console.log(myArray5);

//配列の要素にアクセス
const myArray6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const accessElement = myArray6[1];
console.log(accessElement);
const accessElement2 = myArray6[9];
console.log(accessElement2);

//連想配列（オブジェクト）のプロパティ操作

let personList = { name: '山田', age: 20, sex: '男性' };

console.log(personList.name); // "value1"
console.log(personList['sex']); // "value2"
personList.name = '鈴木';
console.log(personList);

type MyObject = {
  key1: string;
  key2: string;
  key3: string;
};

let obj: MyObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

// 新しいオブジェクトを作成して既存のオブジェクトをマージ
let newObj: MyObject & { key4: string } = {
  ...obj,
  key4: 'value4',
};
console.log(newObj);

//条件分岐（if, else, switch）
//if 指定した条件が真の場合にコードブロック
// if (条件) {
//条件が真の場合に実行するコード
// }

//if-else ifの条件が偽の場合、elseブロック実行
//if (条件) {
//   //条件が真の場合に実行するコード
// } else {
//条件が偽の場合に実行するコード
// }

//else-if 複数の条件を評価して、最初に真となった条件のブロックを実行
//if (条件1) {
//条件1が真の場合に実行するコード
// } else if (条件2) {
//   //条件2が真の場合に実行するコード
// } else {
//   //どの条件も偽の場合に実行するコード
// }

//switch構文
//switch (式) {
//  case 値1:
//値1に一致する場合のコード
//  break:
//  case 値2:
//値2に一致する場合のコード
//  break:
//  default:
//どの値にも一致しない場合のデフォルトのコード
// }

//for文
//for (  初期値;  条件式;  増減値  ) {

// 繰り返す処理を書く

//}
//初期値：繰り返す回数の初期値
//条件式：繰り返しを継続する条件
//増減値：「初期値」を増減する式

const nameLists = ['佐藤', '鈴木', '田中', '木村', '斉藤', '高橋'];
for (let i = 0; i < nameLists.length; i++) {
  console.log(nameLists[i]);
}

//① 0〜50までの数値を1つずつ足した合計値を求める
var result = 0;

for (var count = 0; count < 51; count++) {
  result += count;
}
//② 0〜100までの範囲で、「偶数」だけを表示
for (var i = 0; i < 100; i++) {
  if (i % 2 !== 0) continue;

  console.log(i);
}

console.log(result);

//③ [1, 2, 3, 4, 5]の数値が入った配列を作り、その中にある「1」と「4」だけを表示
var items = [1, 2, 3, 4, 5];

for (var i = 0; i < items.length; i++) {
  //※論理演算子の「||」を使って、「if文」を1行に変更
  if (items[i] === 1 || items[i] === 4) console.log(items[i]);
}

for (var i = 0; i < items.length; i++) {
  // 配列の中身が「1」か「4」の時だけ表示する
  switch (items[i]) {
    case 1:
      console.log(items[i]);
      break;
    case 4:
      console.log(items[i]);
      break;
  }
}

//continueを使って、繰り返し処理の最中に特定のタイミングだけ処理を実行させない
// 10回繰り返す処理
for (var i = 0; i < 10; i++) {
  // 偶数の時(2で割り切れる時)だけ処理を行わない
  if (i % 2 === 0) continue;

  // カウンタ変数「i」を表示
  console.log(i);
}

//breakを使って、繰り返しの途中で処理を中断する
var count = 0;

// 無限ループ
for (;;) {
  // 変数「count」が5より大きくなったら処理を中断する
  if (count > 5) break;

  console.log(count);
  count++;
}

//while文
// while (条件)　{
//   //条件が真の場合に実行するコード
// }

var count = 0;

while (count <= 5) {
  count++;
  console.log(count);
}

//do...while文：条件式に関わらず必ず処理を最初に1回だけ実行
// do {

//   //繰り返し処理

// } while( 条件式 );

var count = 0;

do {
  count++;
  console.log(count);
} while (count < 5);

//while文からループ処理を抜ける
var count = 0;

while (count < 10) {
  count++;

  //偶数の時だけcontinueする
  if (count % 2 === 0) continue;
  console.log(count);
}

var count = 0;

while (count < 10) {
  count++;

  //偶数の時だけbreakする
  if (count % 2 === 0) break;
  console.log(count);
}

//関数の呼び出し：関数名（引数1, 引数2, ...)
const sum = (num1: number, num2: number) => num1 + num2;
console.log(sum(1, 4));

const person = (name: string, age: number): string => {
  return `${name}は${age}歳です`;
};
console.log(person('長男', 5));

//要素の検索
const numbers = [1, 2, 3, 4, 5];
const index = numbers.indexOf(3);
console.log(index);

const numbers2 = [1, 2, 3, 4, 3, 5];
const lastIndex = numbers.lastIndexOf(3); // 3のインデックスは4

const Practice: NextPage = () => {
  return <></>;
};

export default Practice;

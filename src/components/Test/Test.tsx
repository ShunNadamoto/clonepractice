import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  menuImgUrl: string;
  menu: string;
  description: string;
};

export const Test: FC<Props> = ({ menuImgUrl, menu, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__tag}>トッピング</div>
      <img className={styles.container__img} src={menuImgUrl} />
      <div className={styles.container__menu}>{menu}</div>
      <div className={styles.container__descripution}>{description}</div>
      <div className={styles.container__size}>
        サイズ選択<br></br>
        <select name='string'>
          <option value='1'>M（8カット）</option>
          <option value='2'>L（12カット）</option>
        </select>
      </div>
      <div className={styles.container__material}>
        生地選択<br></br>
        <select name='string'>
          <option value='1'>ハンドトス（スタンダード生地</option>
          <option value='2'>クリスピー</option>
          <option value='3'>鉄鍋パンピザ</option>
          <option value='4'>チーズクラフト</option>
          <option value='５'>ソーセージクラスト</option>
        </select>
      </div>
    </div>
  );
};

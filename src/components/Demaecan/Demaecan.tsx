import { type } from 'os';
import { FC } from 'react';
import styles from './index.module.scss';

type Props = {
  menuImgUrl: string;
  restaurantName: string;
  evaluation: string;
  minimumPrice: string;
  demaecanTagList: { img: string; name: string }[];
  deliveryTime: string;
};

export const Demaecan: FC<Props> = ({
  menuImgUrl,
  restaurantName,
  evaluation,
  minimumPrice,
  demaecanTagList,
  deliveryTime,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__menuImg}>
        <img src={menuImgUrl} alt='メニュー画像' width='230px' height='110px' />
      </div>
      <div className={styles.container__restaurantName}>{restaurantName}</div>
      <div className={styles.container__evaluation}>{evaluation}</div>
      <div className={styles.container__minimumPrice}>{minimumPrice}</div>
      <div className={styles.container__demaecanTagBox}>
        {demaecanTagList.map((eachTag, index) => {
          return (
            <div key={index} className={styles.container__demaecanTagBox__deliveryImg}>
              <div>
                {eachTag.img === 'demaecan' && (
                  <img
                    src='https://cdn.demae-can.com/contents/img_s/icon-share-deli-v2.png?imwidth=16'
                    width='16px'
                    height='16px'
                  />
                )}
                {eachTag.name}
              </div>
            </div>
          );
        })}
        <div className={styles.container__demaecanTagBox__deliveryBox__time}>
          {deliveryTime}
          <span className={styles.container__demaecanTagBox__deliveryBox__minute}>分</span>
        </div>
      </div>
    </div>
  );
};

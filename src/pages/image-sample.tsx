import { NextPage } from 'next';
import Image from 'next/image';

import nextsvg from '../../public/next.svg';

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src='next.svg' style={{ width: '394px', height: '80px' }} />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={nextsvg} alt='ロゴ画像' />
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  );
};

export default ImageSample;

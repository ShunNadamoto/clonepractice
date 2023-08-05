import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';

import { Practice11 } from '@/components/Practice11';

const CssTest: NextPage = () => {
  return (
    <>
      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <Practice11 name='史佳' age={1} sex='女の子' />
      <Practice11 name='奏志' age={4} sex='男の子' />
      <Practice11 name='千里' age={30} sex='女性' />
      <Practice11 name='宏樹' age={34} sex='男性' />

      <div className='wrap_scroll_table'>
        <table className='scroll_table'>
          <thead>
            <tr>
              <th> </th>
              <th>aaa</th>
              <th>bbb</th>
              <th>ccc</th>
              <th>ddd</th>
              <th>eee</th>
              <th>fff</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>AAA</th>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
            </tr>
            <tr>
              <th>BBB</th>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
            </tr>
            <tr>
              <th>CCC</th>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
              <td>XXXXXXXXX</td>
              <td>YYYYYYYYY</td>
              <td>ZZZZZZZZZ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='txt'>※横スクロールできます</p>

      <button onClick={() => router.push('/sample/test2')}>/sample/test2ページへ</button>
    </>
  );
};

export default CssTest;

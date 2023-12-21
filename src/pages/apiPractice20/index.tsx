import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useGetOrderList } from '@/lib/hooks/useGetOrderList';
import { usePostOrder } from '@/lib/hooks/usePostOrder';

const baseURL = '/api/orders';
type Order = { user_id: number; product_id: number; amount: number };

const OrderPage = () => {
  const [newUserId, setNewUserId] = useState(0);
  const [newProductId, setNewProductId] = useState(0);
  const [newAmount, setNewAmount] = useState(0);

  const { orderList, refetch } = useGetOrderList();

  const { mutate } = usePostOrder({
    onSuccess: (data) => {
      refetch();
      console.log('POST成功');
      setNewUserId(0);
      setNewProductId(0);
      setNewAmount(0);
    },
    onError: (error) => {
      console.error('Error creating data:', error);
      console.log('POSTが失敗しました');
    },
  });

  //   useEffect(() => {
  //     axios
  //       .get<Order[]>(baseURL)
  //       .then((response) => {
  //         console.log(response);
  //         setOrderList(response.data);
  //       })
  //       .catch((error: AxiosError<{ error: string }>) => {
  //         console.log(error);
  //       });
  //   }, [refetch]);

  // useEffect(() => {
  //   const getOrderList = async () => {
  //     try {
  //       const response = await axios.get<Order[]>(baseURL);
  //       console.log(response.data);
  //       getOrderList();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getOrderList();
  // }, [refetch]);

  return (
    <div>
      {orderList.map((elem, index) => (
        <div key={index}>
          <div>ユーザーID:{elem.user_id}</div>
          <div>商品ID:{elem.product_id}</div>
          <div>購入量:{elem.amount}</div>
        </div>
      ))}

      <input type='text' value={newUserId} onChange={(e) => setNewUserId(Number(e.target.value))} />
      <br />
      <input
        type='text'
        value={newProductId}
        onChange={(e) => setNewProductId(Number(e.target.value))}
      />
      <br />
      <input type='text' value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))} />

      {/* <button
        disabled={!(newUserId && newProductId && newAmount)}
        onClick={() => {
          const requestBody = { user_id: newUserId, product_id: newProductId, amount: newAmount };
          axios
            .post(baseURL, requestBody)
            .then((response) => {
              console.log(response.data);
              setNewUserId(Number(''));
              setNewProductId(Number(''));
              setNewAmount(Number(''));
              setRefetch(!refetch);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        新規オーダー追加
      </button> */}

      {/* <button
        disabled={!(newUserId && newProductId && newAmount)}
        onClick={async () => {
          try {
            const requestBody = { user_id: newUserId, product_id: newProductId, amount: newAmount };
            await axios.post(baseURL, requestBody);

            setNewUserId(0);
            setNewProductId(0);
            setNewAmount(0);
            refetch();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規オーダー追加
      </button> */}

      <button
        disabled={!(newUserId && newProductId && newAmount)}
        onClick={() => {
          const requestBody: Order = {
            user_id: newUserId,
            product_id: newProductId,
            amount: newAmount,
          };
          mutate(requestBody);
        }}
      >
        新規オーダー追加
      </button>
    </div>
  );
};

export default OrderPage;

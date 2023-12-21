import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { title } from 'process';

type Book = { title: string; author: string };
const baseURL = '/api/books';

const BookPage = () => {
  //   const [bookList, setBookList] = useState<Book[]>([]);
  //   const [refetch, setRefetch] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const {
    register,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Book>();

  const {
    data: bookListData,
    isLoading,
    refetch,
  } = useQuery(baseURL, async () => {
    const response = await axios.get<Book[]>(baseURL);
    return response.data;
  });

  const bookList = bookListData ?? [];

  const { mutate } = useMutation(
    async (postData: Book) => {
      const response = await axios.post(baseURL, postData);
      return response.data;
    },
    {
      onSuccess: () => {
        refetch();
        setNewBookTitle('');
        setNewBookAuthor('');
      },
      onError: () => {
        console.log('POST失敗');
      },
    },
  );

  //   useEffect(() => {
  //     axios
  //       .get<Book[]>(baseURL)
  //       .then((response) => {
  //         console.log(response);
  //         setBookList(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [refetch]);

  //   useEffect(() => {
  //     const getBookList = async () => {
  //       try {
  //         const response = await axios.get<Book[]>(baseURL);
  //         setBookList(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getBookList();
  //   }, [refetch]);

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}

      <div>
        <label>
          <Controller
            control={control}
            name='title'
            rules={{
              required: `必須項目です`,
              maxLength: {
                value: 255,
                message: `255文字以内で入力してください`,
              },
            }}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <input
                type='text'
                name={name}
                onBlur={onBlur}
                onChange={(event) => {
                  console.log(errors.title?.message);
                  onChange(event.target.value);
                }}
                value={value}
                data-testid='title'
              />
            )}
          />
          <p>{errors.title?.message}</p>
        </label>

        <label>
          <Controller
            control={control}
            name='author'
            render={({ field: { onChange, onBlur, value, name } }) => (
              <input
                type='text'
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                data-testid='author'
              />
            )}
          />
        </label>
      </div>

      {/* <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} /> */}

      <button
        onClick={() => {
          mutate({ title: getValues('title'), author: getValues('author') });
        }}
      >
        新規に追加
      </button>

      {/* <button
        onClick={() => {
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          axios
            .post<Book[]>(baseURL, requestBody)
            .then((response) => {
              console.log(response);
              setNewBookTitle('');
              setNewBookAuthor('');
              setRefetch(!refetch);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        新規に追加
      </button> */}

      {/* <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            axios.post<Book[]>(baseURL, requestBody);
            setNewBookTitle('');
            setNewBookAuthor('');
            setRefetch(!refetch);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新規に追加
      </button> */}
    </div>
  );
};

export default BookPage;

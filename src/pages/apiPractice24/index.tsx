import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';

type Book = { title: string; author: string };
const baseURL = '/api/books';

const BookPage = () => {
  //   const [bookList, setBookList] = useState<Book[]>([]);
  //   const [refetch, setRefetch] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<Book[]>();

  //   const onSubmit: SubmitHandler<Book[]> = (data) => {
  //     console.log(data); // フォームのデータを取得
  //   };

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
      {bookList.map((elem) => (
        <div>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} />
        {errors.title && <span>Title is required</span>}
      </div>

      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" {...register('author', { required: true })} />
        {errors.author && <span>Author is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form> */}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      <button
        onClick={() => {
          mutate({ title: newBookTitle, author: newBookAuthor });
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

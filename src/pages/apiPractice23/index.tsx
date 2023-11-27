import axios from '@/lib/axiosInstance';
import { useState, useEffect, ChangeEvent } from 'react';
import { useQuery, useMutation } from 'react-query';
import { usePostBook } from '@/lib/hooks/usePostBook';

type Book = { title: string; author: string; thumbnail: File | null };
const baseURL = '/api/books';
const book = { title: 'sampleBook', author: 'samplePerson' };

const BookPage = () => {
  const [book, setBook] = useState<Book>({ title: '', author: '', thumbnail: null });
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const { mutate } = usePostBook({
    onSuccess: (data) => {
      refetch();
      console.log('POSTが成功しました');
      setNewBookTitle('');
      setNewBookAuthor('');
    },
    onError: (data) => {
      console.log('POSTが失敗しました');
    },
  });

  useEffect(() => {
    const storedText = sessionStorage.getItem('newBookTitle');
    let parsedText;
    if (storedText) {
      parsedText = JSON.parse(storedText);
    } else {
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    console.log(name);

    if (name === 'title') {
      setNewBookTitle(value);
    } else if (name === 'author') {
      setNewBookAuthor(value);
    }

    sessionStorage.setItem('book', JSON.stringify({ title: newBookTitle, author: newBookAuthor }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setBook((prevState) => ({ ...prevState, thumbnail: selectedFile }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // フォームの送信処理や、API呼び出しなどをここで行う
    console.log('Book:', book);
  };

  // useEffect(() => {
  //   const getBookList = async () => {
  //     try {
  //       const response = await axios.get<Book[]>(baseURL);
  //       console.log(response);
  //       setBookList(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBookList();
  // }, [refetch]);

  const {
    data: BookListData,
    isLoading,
    refetch,
  } = useQuery<Book[]>(baseURL, async () => {
    const response = await axios.get<Book[]>(baseURL);
    return response.data;
  });

  const bookList = BookListData ?? [];

  return (
    <div>
      {bookList.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input type='text' value={newBookTitle} onChange={handleInputChange} name='title' />
        <br />
        <input type='text' value={newBookAuthor} onChange={handleInputChange} name='author' />
        <br />
        <input type='file' onChange={handleChange} />

        <button
          disabled={!(newBookTitle && newBookAuthor)}
          onClick={() => {
            console.log(book.thumbnail);
            const requestBody: Book = {
              title: newBookTitle,
              author: newBookAuthor,
              thumbnail: book.thumbnail,
            };
            mutate(requestBody);
          }}
          type='submit'
        >
          投稿する
        </button>
      </form>
    </div>
  );
};

export default BookPage;

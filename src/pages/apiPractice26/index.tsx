import axios from '@/lib/axiosInstance';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useToasts } from 'react-toast-notifications';

type Book = { title: string; author: string };
const baseURL = '/api/books';

const BookPage = () => {
  const { addToast } = useToasts();
  const [bookList, setBookList] = useState<Book[]>([]);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get<Book[]>(baseURL)
      .then((response) => {
        console.log(response);
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refetch]);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get<Book[]>(baseURL);
        setBookList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookList();
  }, [refetch]);

  useEffect(() => {
    axios
      .get<Book[]>(baseURL)
      .then((response) => {
        console.log(response);
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getBookList = async () => {
      try {
        const response = await axios.get<Book[]>(baseURL);
        setBookList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookList();
  }, [refetch]);

  const { data: bookListData, refetch: refetchExcute } = useQuery<Book[]>(baseURL, async () => {
    const response = await axios.get(baseURL);
    return response.data;
  });

  const bookList2 = bookListData ?? [];

  const addNewBookMutation = useMutation(
    async (requestData: { title: string; author: string }) => {
      const response = await axios.post(baseURL, requestData);
      return response.data;
    },
    {
      onSuccess: () => {
        addToast('書籍を追加しました', {
          appearance: 'success',
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
        setNewBookTitle('');
        setNewBookAuthor('');
        refetchExcute();
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );

  return (
    <div>
      {bookList2.map((elem, index) => (
        <div key={index}>
          <div>{elem.title}</div>
          <div>{elem.author}</div>
        </div>
      ))}

      <input type='text' value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      <br />
      <input type='text' value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />

      <button
        onClick={async () => {
          addToast('書籍を追加しました', {
            appearance: 'success',
            autoDismiss: true, // autoDismissプロパティをtrueに設定して、トーストが自動的に消えるようにします
            autoDismissTimeout: 3000,
          });
          const requestBody = { title: newBookTitle, author: newBookAuthor };
          axios
            .post(baseURL, requestBody)
            .then((response) => {
              console.log(response);
              setNewBookTitle('');
              setNewBookAuthor('');
              refetchExcute();
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        新しい本を追加
      </button>

      <button
        onClick={async () => {
          try {
            const requestBody = { title: newBookTitle, author: newBookAuthor };
            const response = await axios.post(baseURL, requestBody);

            addToast('書籍を追加しました', {
              appearance: 'success',
              autoDismiss: true,
              autoDismissTimeout: 3000,
            });

            console.log(response);
            setNewBookTitle('');
            setNewBookAuthor('');
            refetchExcute();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        新しい本を追加
      </button>

      <button
        onClick={() => {
          addNewBookMutation.mutate({ title: newBookTitle, author: newBookAuthor });
        }}
      >
        新しい本を追加
      </button>
    </div>
  );
};

export default BookPage;

import axios from 'axios';

type Book = { title: string; author: string };

async function fetchBookList(url:string): Promise<Book[]> {
  const { data } = await axios.get<Book[]>(process.env.NEXT_PUBLIC_API_URL+url);
  return data;
}

export default fetchBookList
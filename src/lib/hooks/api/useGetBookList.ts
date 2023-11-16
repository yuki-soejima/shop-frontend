import { useState, useEffect } from "react";
import axios from "@/lib/axiosInstance";
import fetchBookList from "./api";
import { useQuery } from "react-query";
type Book = { title: string; author: string };

// export const useGetBookList = () => {
//     const [bookList, setBookList] = useState<Book[]>([]);
//     const [refetch, setRefetch] = useState(false)

//     useEffect(() => {

//         // const {data} = useBookList()
//         // const getData = fetchBookList("/api/books")
//         const getData = async () => {
//             try {
//                 const result = await axios.get<Book[]>("/api/books")
//                 setBookList(result.data)

//             } catch(error) {
//                 console.log(error)
//             }

//         }
//         getData()

//       }, [refetch]);
//       const refetchExecute = () => {
//         setRefetch(!refetch)
//       }
//       return {bookList:bookList, refetch:refetchExecute}
// }

export const useGetBookList = () =>
  useQuery<Book[]>("/api/books", async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "api/books");
    return res.data;
  });

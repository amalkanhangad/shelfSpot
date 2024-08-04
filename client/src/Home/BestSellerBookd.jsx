import React, { useEffect, useState } from 'react'
import { useActionData } from 'react-router-dom'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setbooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:1000/all-books").then(res => res.json()).then(data => setbooks(data.slice(0,7)))
    },[])
  return (
    <div>
      <BookCards books={books} headline="Best seller books"/>
    </div>
  )
}

export default BestSellerBooks

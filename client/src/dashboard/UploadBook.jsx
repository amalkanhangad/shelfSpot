import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import {Link} from "react-router-dom";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantacy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "self-help",
    "Memoirs",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Arts"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])
  const handlechangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }
  // handle book submit
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookPDFURl = form.bookPDFURl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookPDFURl,   
    }
    console.log(bookObj)

    // send data to db
    fetch("http://localhost:1000/upload-books",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    }).then(res=> res.json()).then(data=>{
      // console.log(data)
      alert("Book uploaded successfully")
    })

  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold ">Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className="flex gap-8 ">
          {/* Book title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              shadow
            />
          </div>
          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
              shadow
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex gap-8 ">
          {/* Book image */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image"
              required
              shadow
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded "
              value={selectedBookCategory}
              onChange={handlechangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* book desc */}
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description " />
        </div>
        <textarea
          id="bookDescription"
          name="Book description"
          placeholder="Add book description"
          required
          shadow
          rows={5}
          className="w-full rounded"
        />

        {/* 4th row */}
        <div className="flex gap-8 ">
          {/* Book pdf url */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURl" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPDFURl"
              name="bookPDFURl"
              type="text"
              placeholder=" book pdf url"
              required
              shadow
            />
          </div>
        </div>
        <Button type="submit" className="mt-5  bg-teal-600">
          Upload book
        </Button>
      </form>
    </div>
  );
}

export default UploadBook

"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageDate] = useState(null);
  
  const Header = () => {
    return (
      <div className="m-2">
        <h1>Midterm App</h1>
        <button onClick={FetchImages} className="p-2">fetch</button>
      </div>
    );
  }

  const ImageListContainer = () => {
    if(loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    if(imageData) {
      const imagesListItems = [];

      imageData.forEach((image, i) => {
        imagesListItems.push(
        <article key={image.id}>
        <img src = {image.download_url}></img>
        <p>Author: {image.author}</p>
        <a href={image.download_url}>Link to image</a>
        </article>
        );
      });

      return (
        <div>
          {imagesListItems}
        </div>
      )
    }

    return (
      <div>
        no images fetched
      </div>
    )
  }

  async function FetchImages() {
    const API_URL = "https://picsum.photos/v2/list?limit=5"

    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();

    // const debuggerVar = "test var"; DONT LEAVE THESE IN CODE EVER EVER EVER
    // debugger;
    // const moreDebuggerVar = "another test var";

    // return(console.log("button clicked"));
    // alert("button clicked");

    setImageDate(data);
    setLoading(false);
  }

  return (
    <>
      <div className="m-2">
        <Header />
        <ImageListContainer /> 
      </div>
    </>

  );
}

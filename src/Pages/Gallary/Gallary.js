"use client";

import { ImageGallery } from "react-image-grid-gallery";
import React from 'react';
import Gimage from "../../images/red.jpg";



const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src:{Gimage} ,
    },
    {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src:{Gimage} ,
      },
      {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src:{Gimage} ,
      },
  ];

export default function Gallary() {
  return (
    <div>
         <ImageGallery
      imagesInfoArray={imagesArray}
      columnWidth={230}
      gapSize={24}
    />
    </div>
  )
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  let { username } = useParams();
  // console.log(params)
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    let picture = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture)
    reader.onloadend =() => {
      const data = reader.result
      console.log(data)
      setImage(data)
    };
  };

  return (
    <div>
      <img src={image} alt=""  width={100} height={100}/> <br />
      <input type="file" onChange={(e) => handleImage(e)} />
    </div>
  );
};

export default Blog;

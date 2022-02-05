import React, { useState } from "react";
import { nanoid } from "nanoid";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: nanoid(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }

  // const bodyInputRef = useRef();

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={e =>
          setPost({ ...post, title: e.target.value })
        }
        type="text"
        placeholder="Название поста"
      />

      <MyInput
        value={post.body}
        onChange={e =>
          setPost({ ...post, body: e.target.value })
        }
        type="text"
        placeholder="Описание поста"
      />

      {/* Не управляемый компонент */}
      {/* <MyInput 
				ref={bodyInputRef}
				type='text' 
				placeholder='Описание поста' /> */}

      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { auth } from "../firebase";
import useAddData from "../hooks/addData"
const AddPost = () => { 

  const { handleSubmit, register, errors } = useForm();
  const {mutate, data} = useAddData()
  
  const onSubmit = async (data) => {
    await mutate(data)
    // console.log(data)
  };
  // console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input type="Title" name="title" ref={register()} required></input>
        <label>Text</label>
        <input type="Text" name="text" ref={register()} required></input>

        <button type="submit">Add new post</button>
      </form>
    </div>
  );
};

export default AddPost;

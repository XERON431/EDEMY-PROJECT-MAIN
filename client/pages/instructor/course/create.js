import axios from "axios";
import { useState } from "react";

import CourseCreateForm from "../../../components/forms/CourseCreateForm.js";

const Coursecreate = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: "99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
  });

  const [preview, setPreview] = useState('');

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setPreview(window.URL.createObjectURL(e.target.files[0]));
  };

  // const handlePaidChange = value => {
  //   setValues({ ...values, paid: value === "paid" });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <h1 className="jumbotron text-center square">Create Course</h1>
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
        />
      </div>
      <pre>{JSON.stringify(values, null, 4)}</pre>
      {preview && <img src={preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />}
    </div>
  );
};

export default Coursecreate;

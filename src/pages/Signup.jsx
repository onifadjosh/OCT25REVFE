import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as yup from "yup";

const Signup = () => {
    const [loading, setloading] = useState(false)
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
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
  
      onSubmit: async(values) => {
        // alert("loading...")
        try {
          console.log(values);
        setloading(true)
        let response = await axios.post('http://localhost:5006/api/v1/signUp', {
          profilePicture:image,
          ...values

        })
        if(response.data.status){
          alert(response.data.message)
        }
        setloading(false)
        } catch (error) {
          alert(error.message)
          setloading(false)
        }
      },
  
      validationSchema: yup.object({
        firstName: yup.string("").required("firstname is required"),
        lastName: yup.string("").required("lastname is required"),
        email: yup
          .string("")
          .email("invalid email format")
          .required("Email is required"),
        password: yup
          .string("")
          .required("Password is required")
          .min(8, "password must be at least 8 characters")
          .matches(
            /[A-Z]+/,
            "Password must contain at least one uppercase letter"
          )
          .matches(/\d+/, "Password must contain at least one number")
          .matches(
            /[@$!%*#?&]+/,
            "Password must contain at least one special character"
          ),
      }),
    });
  //   console.log(formik.values);
  // console.log(formik.errors)
  // console.log(formik.touched)
    return (
      <div className="mt-5 p-4">
        <h1>OSUN MFB</h1>
        <h3 className="font-monospace">Register Here:</h3>
        <img src={image} alt=""  width={100} height={100}/> <br />
        <input type="file" onChange={(e) => handleImage(e)} />
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"FirstName"}
          className="form-control w-50"
        />
       {formik.touched.firstName&& <small className="text-danger">{formik.errors.firstName}</small>}
        <br />
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="LastName"
          className={`form-control w-50  ${(formik.touched.lastName&&formik.errors.lastName)&&'is-invalid'}  ${(formik.touched.lastName&&!formik.errors.lastName)&&'is-valid'}`}
        />
        {formik.touched.lastName&& <small className="text-danger">{formik.errors.lastName}</small>}
        <br />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
          className="form-control w-50"
        />
        {formik.touched.email&& <small className="text-danger">{formik.errors.email}</small>}
        <br />
        <input
          type="text"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          className={`form-control w-50  ${(formik.touched.password&&formik.errors.password)&&'is-invalid'}  ${(formik.touched.password&&!formik.errors.password)&&'is-valid'}`}
        />
      {formik.touched.password&& <small className="text-danger">{formik.errors.password}</small>}
        <br />
        <button type="submit" className="btn btn-success" onClick={formik.handleSubmit}>
          {
            loading?"Submitting...":"Submit"
          }
        </button>
      </div>
    );
}

export default Signup
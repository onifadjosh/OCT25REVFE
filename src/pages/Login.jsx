import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { updateName } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let dispatch= useDispatch()
  let navigate = useNavigate()
  const [loading, setloading] = useState(false)
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
  
      onSubmit: async(values) => {
        // alert("loading...")
        try {
          console.log(values);
        setloading(true)
        let response = await axios.post('https://octrevbe.onrender.com/api/v1/login', values, {
          headers:{
            "Authorization":"Bearer token"
          }
        })
        console.log(response.data)
        if(response.data.status){
          // alert(response.data.message)
          console.log(response.data)
          localStorage.setItem('token', response.data.token)

          let user = response.data.user
          dispatch(updateName(user.fullname))
          localStorage.setItem('user', JSON.stringify(user))

          navigate('/home')
        }else{
          alert(response.data.message)
        }
        setloading(false)
        } catch (error) {
          console.log(error);
          
          setloading(false)
        }
      },
  
      validationSchema: yup.object({

        email: yup
          .string("")
          .email("invalid email format")
          .required("Email is required"),
        password: yup
          .string("")
          .required("Password is required")
          // .min(8, "password must be at least 8 characters")
          // .matches(
          //   /[A-Z]+/,
          //   "Password must contain at least one uppercase letter"
          // )
          // .matches(/\d+/, "Password must contain at least one number")
          // .matches(
          //   /[@$!%*#?&]+/,
          //   "Password must contain at least one special character"
          // ),
      }),
    });
  //   console.log(formik.values);
  // console.log(formik.errors)
  // console.log(formik.touched)
    return (
      <div className="mt-5 p-4">
        <h1>OSUN MFB</h1>
        <h3 className="font-monospace">Sign In Here:</h3>
        <input
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={"Email"}
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
};

export default Login;

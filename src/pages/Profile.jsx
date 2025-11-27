import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate()
  const [id, setid] = useState("")
  const [fullname, setfullname] = useState("")
  useEffect(() => {
    let person = localStorage.getItem("user");
    let user = JSON.parse(person);

    let token = localStorage.getItem('token')
    const fetchUser = async () => {
      try {
        let response = await axios.get(`http://localhost:5006/api/v1/get-user/${user.id}`,{
          headers:{
              "Authorization":`Bearer ${token}`
          }
        });
        if(response.data.message=="User Unauthorized!"){
          localStorage.clear()
          navigate('/login', replace)
        }
      } catch (error) {
        console.log(error)
      }
    };

    fetchUser()
  }, []);
  return <div>Profile </div>;
};

export default Profile;

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    let person = localStorage.getItem("user");
    let user = JSON.parse(person);

    let token = localStorage.getItem('token')
    const fetchUser = async () => {
      let response = await axios.get(`http://localhost:5006/api/v1/get-user/${user.id}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
      });
      console.log(response.data)
    };

    fetchUser()
  }, []);
  return <div>Profile</div>;
};

export default Profile;

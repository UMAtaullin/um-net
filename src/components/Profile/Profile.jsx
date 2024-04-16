import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = () => {
  return (
    <div>
      <PersonalInfo/>
      <MyPosts/>
    </div>
  )
}

export default Profile

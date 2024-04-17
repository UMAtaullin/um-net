import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  )
}

export default Profile

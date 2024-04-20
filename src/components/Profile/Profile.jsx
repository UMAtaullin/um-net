import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = (props) => {
debugger
  return (
    <div>
      <PersonalInfo />
      <MyPosts postsData={props.state.postsData}
      addPost={props.addPost} />
    </div>
  )
}

export default Profile

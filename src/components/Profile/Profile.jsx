import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = (props) => {
  return (
    <div>
      <PersonalInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile

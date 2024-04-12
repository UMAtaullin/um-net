import React from "react";
import './Post.module.css'
import cls from './Post.module.css'

const Post = (props) => {
  return (
		<div>
			<div className={cls.ava}>
				<a href='#'>
					<img
						src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
						alt='Avatarka'
					/>
				</a>
			</div>
			<div className={cls.post}>
        {props.message}
      </div>
		</div>
	)
}

export default Post

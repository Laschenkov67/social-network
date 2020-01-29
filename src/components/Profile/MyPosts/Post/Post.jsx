import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/41/27/4a/41274aeffd5ff4827e14120694b9bceb.jpg" />
      {props.message}
          <div>
        <span>like  {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;
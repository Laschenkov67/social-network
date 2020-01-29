import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  
  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXsiUsCv7q3Xjb1eMkcI2IE3LA1lK9BhSiDHHzpE38a05llmy' />
      </div >
      <div className={s.descriptionBlock}> 
      <img src={props.profile.photos.large} />
      ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
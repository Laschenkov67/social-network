import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';
import { connect } from 'react-redux';

let mapStateToProps =(state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps =(dispatch) => {
  return {
    updateNewPostText: (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
      }, 
      addPost: () => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
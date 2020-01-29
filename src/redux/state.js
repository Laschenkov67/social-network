import profileReducer from './profile-reducer'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

    _state: {
        profilePage: {
            postsData:
                [
                    { id: 1, message: 'Hi, how are you?i', likesCount: 23 },
                    { id: 2, message: 'It\'s my first post', likesCount: 73 },
                    { id: 3, message: 'I learn React', likesCount: 13 },
                    { id: 4, message: 'My name is Artem', likesCount: 47 },
                    { id: 5, message: 'London the capital of Great Britain', likesCount: 34 }
                ],
            newPostText: ''
        },

        dialogsPage: {
            dialogsData:
                [
                    { id: 1, name: 'Димыч' },
                    { id: 2, name: 'Иван' },
                    { id: 3, name: 'Арина' },
                    { id: 4, name: 'Света' },
                    { id: 5, name: 'Саша' }
                ],

            messagesData:
                [
                    { id: 1, message: 'Hi' },
                    { id: 2, message: 'Yo' },
                    { id: 3, message: 'How are your?' },
                    { id: 4, message: 'What is you name?' },
                    { id: 5, message: 'Hello. How are you?' }
                ],

            newMessageBody: ""
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    }, 

   //Добавление нового поста
    _addPost(postMessage) {
        let newPost = { id: 6, message: this._state.profilePage.newPostText, likesCount: 0 }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    //Передача поста в state(FLUX)
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, 

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = profileReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT,
      newText: text
  })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (body) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })

export default store;

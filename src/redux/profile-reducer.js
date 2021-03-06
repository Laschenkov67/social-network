const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData:
        [
            { id: 1, message: 'Hi, how are you?i', likesCount: 23 },
            { id: 2, message: 'It\'s my first post', likesCount: 73 },
            { id: 3, message: 'I learn React', likesCount: 13 },
            { id: 4, message: 'My name is Artem', likesCount: 47 },
            { id: 5, message: 'London the capital of Great Britain', likesCount: 34 }
        ],
    newPostText: 'it-kamasutra.com',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
             };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: 6, message: body }]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogReducer;
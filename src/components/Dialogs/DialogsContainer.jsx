import Dialogs from './Dialogs';
import { updateNewMessageCreator, sendMessageCreator } from '../../redux/state';
import { connect } from 'react-redux';


let mapStateToProps =(state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateNewMessageCreator(body))
        }, 
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
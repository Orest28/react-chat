import React from 'react';
import { useSelector } from 'react-redux';

import { getImageFromLocalStorage } from '../utils/LocalStorageHelper'

const ChatTitle = () => {

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);

    if(selectedContact === null) {
        return (
            <div className="chat-title">

            </div>
        )
    }else {
        return (
            <div className="chat-title">
                <img src={getImageFromLocalStorage(selectedContact.image)} alt={selectedContact.name} />
                <h2>{selectedContact.name}</h2>
            </div>
        )
    }
}

export default ChatTitle;
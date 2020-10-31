import React from 'react';
import { useSelector } from 'react-redux';


const ChatTitle = () => {

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);

    if(selectedContact === null) {
        return (
            <div id="chat-title">

            </div>
        )
    }else {
        return (
            <div id="chat-title">
                <img src={selectedContact.image} alt={selectedContact.name} />
                <h2>{selectedContact.name}</h2>
            </div>
        )
    }
}

export default ChatTitle;
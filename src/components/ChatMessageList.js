import React from 'react';
import { useSelector } from 'react-redux';

import { getImageFromLocalStorage } from '../utils/LocalStorageHelper'


const ChatMessageList = () => {

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);

    const contacts = useSelector(state => state.contactReducer.contacts);

    if(selectedContact !== null) {
        return (
            <div className="chat-message-list">
                <div className="blocked"></div>
                <div className="wrapper-message-list">
                {
                    contacts.find(contact => contact.id === selectedContact.id).messageList.map((message, index) => {
                        if(message.owner === "You") {
                            return (
                                <div className="message-row you-message" key={index}>
                                    <div className="message-text">{message.message}</div>
                                    <div className="message-date">{new Date(message.date).toLocaleString()}</div>
                                </div>
                            )
                        }else {
                            return (
                                <div className="message-row response-message" key={index}>
                                    <div className="message-content">
                                        <img src={getImageFromLocalStorage(selectedContact.image)} alt={selectedContact.name} />
                                        <div className="message-text">{message.message}</div>
                                        <div className="message-date">{new Date(message.date).toLocaleString()}</div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                </div>
            </div>
        )
    }else {
        return (
            <div className="chat-message-list">

            </div>
        )
    }
}

export default ChatMessageList
import React from 'react';
import { useSelector } from 'react-redux';


const ChatMessageList = () => {

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);

    const contacts = useSelector(state => state.contactReducer.contacts);

    if(selectedContact !== null) {
        return (
            <div id="chat-message-list">
                <div id="blocked"></div>
                <div id="wrapper-message-list">
                {
                    selectedContact.messageList.map((message, index) => {
                        if(message.owner === "You") {
                            return (
                                <div id="message-row" className="you-message" key={index}>
                                    <div id="message-text">{message.message}</div>
                                    <div id="message-date">{new Date(message.date).toLocaleString()}</div>
                                </div>
                            )
                        }else {
                            return (
                                <div id="message-row" className="response-message" key={index}>
                                    <div id="message-text">{message.message}</div>
                                    <div id="message-date">{new Date(message.date).toLocaleString()}</div>
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
            <div id="chat-message-list">

            </div>
        )
    }
}

export default ChatMessageList
import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addMessage, getResponse} from '../action/contactAction'

const ChatForm = () => {

    const [message, setMessage] = useState('');

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);
    const contactsList = useSelector(state => state.contactReducer.contacts);

    const dispatch = useDispatch();

    const sendMessage = (e) => {
        dispatch(addMessage({
            id: selectedContact.id,
            owner: "You",
            message: message,
            date: new Date(Date.now())
        }, contactsList))

        setTimeout(() => dispatch(getResponse({
            id: selectedContact.id,
            owner: selectedContact.name
        }, contactsList)), 13000);

        setMessage('');

        e.preventDefault();
    }

    return (
        <div id="chat-form">
            <form onSubmit={sendMessage}>
            <input 
                type="text" 
                disabled={selectedContact === null} 
                value={message} 
                placeholder="type your message..." 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button type="submit"></button>
            </form>
        </div>
    )
}

export default ChatForm;
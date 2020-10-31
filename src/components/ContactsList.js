import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getContact } from '../action/contactAction';


const ContactList = () => {

    const contacts = useSelector(state => state.contactReducer.contacts);

    const filteredContacts = useSelector(state => state.contactReducer.filteredContacts);
    const filteredName = useSelector(state => state.contactReducer.filterByName);

    const dispatch = useDispatch();

    const displayedContactsList = (filteredContacts.length !== 0 || filteredName !== "") ? filteredContacts : contacts;

    const getLastMessage = (contact) => {
        if(contact.messageList[contact.messageList.length - 1].owner === "You") {
            return "You: " + contact.messageList[contact.messageList.length - 1].message;
        } else {
            return contact.messageList[contact.messageList.length - 1].message;
        }
    }

    return (
        <div id="contacts-list">
            {
                displayedContactsList.map((contact, index) => {
                    return (
                        <div id="conversation" key={index} onClick={() => dispatch(getContact(contact))}>
                            <img src={contact.image} alt={contact.name} />
                            <div id="title-text">
                                {contact.name}
                            </div>
                            <div id="last-message-date">
                                {new Date(contact.messageList[contact.messageList.length - 1].date).toLocaleString()} 
                            </div>
                            <div id="conversation-message">
                                {
                                    getLastMessage(contact)
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactList;
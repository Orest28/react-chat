import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addContact, getContact, clearFilter } from '../action/contactAction';

import {getLastMessage, createContact, getTheBiggestId} from '../utils/ContactListHelper';

import personIcon from '../add-person-icon.png';


const ContactList = ({setClearFilter}) => {

    const contacts = useSelector(state => state.contactReducer.contacts);

    const filteredContacts = useSelector(state => state.contactReducer.filteredContacts);
    const filteredName = useSelector(state => state.contactReducer.filterByName);

    const dispatch = useDispatch();
    
    let displayedContactsList = (filteredContacts.length !== 0 || filteredName !== "") ? filteredContacts : contacts;

    /*
    const getLastMessage = (contact) => {
        if(!contact.messageList.length)
            return "This chat hasn`t messages yet!"
        if(contact.messageList[contact.messageList.length - 1].owner === "You") {
            return "You: " + contact.messageList[contact.messageList.length - 1].message;
        } else {
            return contact.messageList[contact.messageList.length - 1].message;
        }
    }
    */

    /*
    const createContact = (id, img, name, lastMessageDate, messageList, dispatch) => {

        contacts.push({
            id: id,
            image: img,
            name: name,
            lastMessageDate: lastMessageDate,
            messageList: messageList
        })

        setClearFilter(true);

        dispatch(addContact(contacts));
        dispatch(clearFilter())
    }
    */

    /*
    const getTheBiggestId = () => {
        
        let id = 0;

        for(let i = 0; i < contacts.length; i++) {
            if(contacts[i].id > id) {
                id = contacts[i].id;
            }
        }

        return id + 1;
    }
    */

    const generateNewChatForm = () => {
        if(filteredName !== "") {
            return (
                <div id="conversation" 
                    onClick={() => createContact(getTheBiggestId(contacts), "../images/add-person-icon.png", filteredName, null, [], dispatch, setClearFilter, contacts)}>
                    <img src={personIcon} alt={"new person"} />
                    <div id="title-text">
                        {filteredName}
                    </div>
                    <div id="last-message-date">
                        
                    </div>
                    <div id="conversation-message">
                        To start chat with {filteredName} , please enter here!
                    </div>
                </div>
            )
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
                                {new Date(contact.lastMessageDate).toLocaleString()} 
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
            {
                generateNewChatForm()
            }
        </div>
    )
}

export default ContactList;
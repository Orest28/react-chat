import {
    GET_CONTACT,
    ADD_CONTACT,
    ADD_MESSAGE,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from './types'

import axios from 'axios';

export const getContact = (contact) => (dispatch) => {
    dispatch({
        type: GET_CONTACT,
        payload: contact,
    })
}

export const addContact = (contacts) => (dispatch) => {
    dispatch({
        type: ADD_CONTACT,
        payload: contacts
    })
}

export const addMessage = (messageObject, oldContactsList) => (dispatch) => {

    let updatedContactsList = [...oldContactsList];

    updatedContactsList.find(contact => contact.id === messageObject.id).messageList.push(messageObject);
    updatedContactsList.find(contact => contact.id === messageObject.id).lastMessageDate = messageObject.date;

    delete messageObject.id;

    dispatch(sortContactsByDateAndAddMessage(updatedContactsList));
}

export const getResponse = (ownerObject, oldContactsList) => (dispatch) => {

    let messageObject = {
        owner : ownerObject.owner,
        message: "",
        date: new Date(Date.now())
    }

    let updatedContactsList = [...oldContactsList];

    axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => {
            messageObject.message = res.data.value;
            updatedContactsList.find(contact => contact.id === ownerObject.id).messageList.push(messageObject);
            updatedContactsList.find(contact => contact.id === ownerObject.id).lastMessageDate = messageObject.date;
            dispatch(sortContactsByDateAndAddMessage(updatedContactsList));
        }).catch(err => {
            console.log(err)
        });
}

export const filterContacts = (filter, contacts) => (dispatch) => {
    
    const filteredContacts = (filter !== "") ? contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase())) : [];

    dispatch({
        type: FILTER_CONTACTS,
        payload: {
            filteredContacts: filteredContacts,
            filteredName : filter
        }
    })
}

export const sortContactsByDateAndAddMessage = (contacts) => (dispatch) => {

    let sortedContacts = [...contacts];

    sortedContacts.sort((a,b) => {
        if(new Date(a.lastMessageDate).getTime() > new Date(b.lastMessageDate).getTime()) return -1;
        if(new Date(a.lastMessageDate).getTime() < new Date(b.lastMessageDate).getTime()) return 1;
        return 0;
    })

    dispatch({
        type: ADD_MESSAGE,
        payload: {
            updatedContactsList : sortedContacts
        }
    });
}

export const clearFilter = () => (dispatch) => {
    dispatch({
        type: CLEAR_FILTER,
    })
}
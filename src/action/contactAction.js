import {
    GET_CONTACT,
    ADD_CONTACT,
    ADD_MESSAGE,
    FILTER_CONTACTS
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

    delete messageObject.id;

    dispatch({
        type: ADD_MESSAGE,
        payload: updatedContactsList
    });
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
            console.log(messageObject)
            console.log(updatedContactsList)
            updatedContactsList.find(contact => contact.id === ownerObject.id).messageList.push(messageObject);
            dispatch({
                type: ADD_MESSAGE,
                payload: updatedContactsList
            })
        }).catch(err => {
            console.log(err)
        });
}

export const filterContacts = (filter, contacts) => (dispatch) => {
    
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase()));



    dispatch({
        type: FILTER_CONTACTS,
        filteredContacts: filteredContacts,
        filteredName : filter
    })
}
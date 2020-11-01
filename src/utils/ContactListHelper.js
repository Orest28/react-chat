import {addContact, clearFilter} from '../action/contactAction';


export const getLastMessage = (contact) => {
    if(!contact.messageList.length)
        return "This chat hasn`t messages yet!"
    if(contact.messageList[contact.messageList.length - 1].owner === "You") {
        return "You: " + contact.messageList[contact.messageList.length - 1].message;
    } else {
        return contact.messageList[contact.messageList.length - 1].message;
    }
}

export const createContact = (id, img, name, lastMessageDate, messageList, dispatch, setClearFilter, contacts) => {

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

export const getTheBiggestId = (contacts) => {
        
    let id = 0;

    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].id > id) {
            id = contacts[i].id;
        }
    }

    return id + 1;
}
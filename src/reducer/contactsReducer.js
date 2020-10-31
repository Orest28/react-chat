import {
    ADD_CONTACT,
    GET_CONTACT,
    ADD_MESSAGE,
    FILTER_CONTACTS
} from '../action/types';

const initialState = {
    contacts : [
        {
            id : 0,
            image : '../images/contact_1.jpeg',
            name : "Jessica",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                },
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 1,
            image : '../images/contact_2.jpeg',
            name : "John",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 2,
            image : 'images/contact_3.jpeg',
            name : "Peter",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        },
        {
            id: 3,
            image : 'images/contact_4.jpeg',
            name : "Brown",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        },
        {
            id: 4,
            image : 'images/contact_5.jpeg',
            name : "Lusy",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 5,
            image : 'images/contact_5.jpeg',
            name : "Lusy",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 10, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 10, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 10, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 10, 17, 3, 28, 14)
                }
            ]
        }
    ],
    filteredContacts: [],
    selectedContact: null,
    filterByName: ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts : action.payload
            }
        case GET_CONTACT:
            return {
                ...state,
                selectedContact : action.payload
            }
        case ADD_MESSAGE: 
            return {
                ...state,
                contacts : action.payload
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts : action.filteredContacts,
                filterByName : action.filterName
            }
        default:
            return {
                ...state
            }
    }
};

import {
    ADD_CONTACT,
    GET_CONTACT,
    ADD_MESSAGE,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../action/types';

const initialState = {
    contacts : [
        {
            id : 0,
            image : '../images/contact_1.jpeg',
            name : "Jessica",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                },
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 1,
            image : '../images/contact_2.jpeg',
            name : "John",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 2,
            image : 'images/contact_3.jpeg',
            name : "Peter",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        },
        {
            id: 3,
            image : 'images/contact_4.jpeg',
            name : "Brown",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        },
        {
            id: 4,
            image : 'images/contact_5.jpeg',
            name : "Lusy",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        },
        {
            id : 5,
            image : 'images/contact_5.jpeg',
            name : "OLEG",
            lastMessageDate: new Date(2020, 9, 17, 3, 28, 14),
            lastMessageText: "I`m relaxing",
            messageList : [
                {
                    owner: "You",
                    message: "Hi Jessica how are you?",
                    date: new Date(2020, 9, 17, 3, 24,30)
                },
                {
                    owner: "Jessica",
                    message: "Hi Orest. I`m fine!",
                    date: new Date(2020, 9, 17, 3, 25,30)
                },
                {
                    owner: "Jessica",
                    message: "What are you doing?",
                    date: new Date(2020, 9, 17, 3, 27,30)
                },
                {
                    owner: "You",
                    message: "I`m relaxing",
                    date: new Date(2020, 9, 17, 3, 28, 14)
                }
            ]
        }
    ],
    filteredContacts: [],
    selectedContact: null,
    filterByName: "",
    clearFilter: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts : action.payload,
                clearFilter: true
            }
        case GET_CONTACT:
            return {
                ...state,
                selectedContact : action.payload
            }
        case ADD_MESSAGE: 
            return {
                ...state,
                contacts : action.payload.updatedContactsList
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts : action.payload.filteredContacts,
                filterByName : action.payload.filteredName
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredContacts: [],
                filterByName: ""
            }
        default:
            return state;
    }
};

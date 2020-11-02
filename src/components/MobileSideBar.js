import { useDispatch, useSelector } from 'react-redux';

import {getImageFromLocalStorage} from '../utils/LocalStorageHelper';

import {getLastMessage} from '../utils/ContactListHelper';

import {getContact, filterContacts} from '../action/contactAction'
import { useRef } from 'react';

export const MobileSideBar = ({display, setDisplay}) => {

    const contacts = useSelector(state => state.contactReducer.contacts);

    const dispatch = useDispatch();

    const inputEl = useRef("");

    const filterContactsByName = (name) => {
        dispatch(filterContacts(name, contacts));
    }

    useEffect(() => {
        if(clearFilter === true) {
            inputEl.current.value = "";
            setClearFilter(false);
        }
    },[clearFilter])

    if(display) {
        return (
            <div className="sidenav">
                <div className="account w3-container">
                    <h2>
                        <i className="fa fa-user-circle w3-xxlarge"></i>
                    </h2>
                    <h2>Orest Hlodan</h2>
                </div>
                <div className="find-contact">
                    <form>
                        <input
                            ref={inputEl}
                            type="text" 
                            name="search" 
                            placeholder="Search or start new chat" 
                            onChange={(e) => {
                                filterContactsByName(e.target.value);
                            }}
                        />
                    </form>
                </div>
                <div className="contacts">
                {
                contacts.map((contact, index) => {
                    return (
                        <div 
                            className="mobile-conversation" 
                            key={index} 
                            onClick={() => {
                                dispatch(getContact(contact))
                                setDisplay(false);      
                            }}>
                            <img src={getImageFromLocalStorage(contact.image)} className="mobile-contact-image" alt={contact.name} />
                            <div className="mobile-title-text">
                                {contact.name}
                            </div>
                            <div className="mobile-last-message-date">
                                {new Date(contact.lastMessageDate).toLocaleString()} 
                            </div>
                            <div className="mobile-conversation-message">
                                {
                                    getLastMessage(contact)
                                }
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
        )
    }else {
        return (<></>)
    }
}
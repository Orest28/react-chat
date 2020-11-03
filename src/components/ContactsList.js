import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getContact } from '../action/contactAction';

import {getLastMessage, createContact, getTheBiggestId} from '../utils/ContactListHelper';

import personIcon from '../add-person-icon.png';
import Modal from './Modal';

import { getImageFromLocalStorage } from '../utils/LocalStorageHelper'

const ContactList = ({setClearFilter, setSideBarDisplay}) => {

    const [modal, setModal] = useState(false);
    const [file, setFile] = useState(null);

    const contacts = useSelector(state => state.contactReducer.contacts);

    const filteredContacts = useSelector(state => state.contactReducer.filteredContacts);
    const filteredName = useSelector(state => state.contactReducer.filterByName);

    const dispatch = useDispatch();
    
    let displayedContactsList = (filteredContacts.length !== 0 || filteredName !== "") ? filteredContacts : contacts;
    

    const handleChangeFile = (e) => {
        
        setFile(URL.createObjectURL(e.target.files[0]));

        const reader = new FileReader();

        reader.onload = () =>  {
            localStorage.setItem(`contact_${getTheBiggestId(contacts)}`, reader.result);
        };

        reader.readAsDataURL(e.target.files[0]);
    }

    const generateNewChatForm = () => {
        if(filteredName !== "") {
            return (
                <div className="conversation" 
                    onClick={() => 
                        setModal(true)}
                >
                    <img src={personIcon} alt={"new person"} />
                    <div className="title-text">
                        {filteredName}
                    </div>
                    <div className="last-message-date">
                        
                    </div>
                    <div className="conversation-message">
                        To start chat with {filteredName} , please enter here!
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="contacts-list">
            {
                displayedContactsList.map((contact, index) => {
                    return (
                        <div 
                            className="conversation" 
                            key={index} 
                            onClick={() => { 
                                dispatch(getContact(contact))
                                if(setSideBarDisplay) setSideBarDisplay(false);
                            }}
                        >
                            <img src={getImageFromLocalStorage(contact.image)} alt={contact.name} />
                            <div className="title-text">
                                {contact.name}
                            </div>
                            <div className="last-message-date">
                                {new Date(contact.lastMessageDate).toLocaleString()} 
                            </div>
                            <div className="conversation-message">
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
            <Modal show={modal}>
                <div className="modal" id="modal">
                    <div className="modal-content">
                        <div className="modal-title">
                            <h3>Select profile photo</h3>
                        </div>
                        <div className="break-block-modal"></div>
                        <div className="select-file">
                            <input 
                                type="file"
                                onChange={handleChangeFile}
                            />
                        </div>
                        <div className="break-block-modal"></div>
                        <div className="preview-photo">
                            {
                                file !== null ? <img src={file} alt="preview" /> : <h4>Here will be your selected profile photo</h4>
                            }
                        </div>
                        <div className="break-block-modal"></div>
                        <div className="accept-photo">
                            <button 
                            onClick={() => {
                                setModal(false);
                                createContact(getTheBiggestId(contacts), filteredName, null, [], dispatch, setClearFilter, contacts);
                            }
                            }
                            >Accept</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ContactList;
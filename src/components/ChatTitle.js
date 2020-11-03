import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getImageFromLocalStorage } from '../utils/LocalStorageHelper'
import { MobileSideBar } from './MobileSideBar';

const ChatTitle = ({clearFilter, setClearFilter}) => {

    const [openContactsList, setOpenContactsList] = useState(false);

    console.log(openContactsList)

    const selectedContact = useSelector(state => state.contactReducer.selectedContact);

    const handleChangeOpen = () => {
        if(openContactsList) setOpenContactsList(false);
        else setOpenContactsList(true);
    }

    if(selectedContact === null) {
        return (
            <div className="chat-title">

            </div>
        )
    }else {
        return (
            <div className="chat-title">
                <img src={getImageFromLocalStorage(selectedContact.image)} alt={selectedContact.name} />
                <h2>{selectedContact.name}</h2>
                <div className="toggle-display">
                    <div className="toggle" onClick={() => handleChangeOpen()}></div>
                    <div className="toggle" onClick={() => handleChangeOpen()}></div>
                    <div className="toggle" onClick={() => handleChangeOpen()}></div>
                </div>
                <MobileSideBar display={openContactsList} setDisplay={setOpenContactsList} clearFilter={clearFilter} setClearFilter={setClearFilter} />
            </div>
        )
    }
}

export default ChatTitle;
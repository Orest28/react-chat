import React, { useState } from 'react'

import '../App.scss';

import {filterContacts} from '../action/contactAction';
import { useDispatch, useSelector } from 'react-redux';

//make name in h2 tag


const SearchContainer = () => {

    const contacts = useSelector(state => state.contactReducer.contacts);

    const dispatch = useDispatch();

    const filterContactsByName = (name) => {
        dispatch(filterContacts(name, contacts));
    }

    return (
        <div id="search-container" className="w3-container">
            <div id="account">
                <h2>
                    <i className="fa fa-user-circle w3-xxlarge"></i>
                </h2>
                <h2>Orest Hlodan</h2>
            </div>
            <div id="find-contact">
                <form>
                    <input type="text" name="search" placeholder="Search or start new chat" onChange={(e) => filterContactsByName(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default SearchContainer;
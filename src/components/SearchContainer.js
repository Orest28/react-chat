import React, { useEffect, useRef } from 'react'

//import '../App.scss';

import { filterContacts } from '../action/contactAction';
import { useDispatch, useSelector } from 'react-redux';

const SearchContainer = ({clearFilter, setClearFilter}) => {

    const contacts = useSelector(state => state.contactReducer.contacts);

    const inputEl = useRef("");

    const dispatch = useDispatch();

    const filterContactsByName = (name) => {
        dispatch(filterContacts(name, contacts));
    }

    useEffect(() => {
        if(clearFilter === true) {
            inputEl.current.value = "";
            setClearFilter(false);
        }
    },[clearFilter])

    return (
        <div className="search-container w3-container">
            <div className="account">
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
        </div>
    )
}

export default SearchContainer;
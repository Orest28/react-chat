import React, {useState} from 'react';

import {PersistGate} from 'redux-persist/integration/react'

import './App.scss';

import SearchContainer from './components/SearchContainer';
import ContactsList from './components/ContactsList';
import ChatTitle from './components/ChatTitle';
import ChatMessageList from './components/ChatMessageList';
import ChatForm from './components/ChatForm';

import {persistor} from './store';

import {store} from './store';
import { Provider } from 'react-redux';

function App() {

  const [clearFilter, setClearFilter] = useState(false);

  return (
    <Provider store={store} >
      <PersistGate loading={<ChatMessageList />} persistor={persistor}>
        <div className="App">
          <div className="chat-container">

            <SearchContainer clearFilter={clearFilter} setClearFilter={setClearFilter} />

            <ChatTitle />

            <ContactsList setClearFilter={setClearFilter}/>

            <ChatMessageList />

            <ChatForm />

          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

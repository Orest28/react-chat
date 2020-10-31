import './App.scss';

import SearchContainer from './components/SearchContainer';
import ContactsList from './components/ContactsList';
import ChatTitle from './components/ChatTitle';
import ChatMessageList from './components/ChatMessageList';
import ChatForm from './components/ChatForm';


import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <div id="chat-container">

        <SearchContainer />

        <ChatTitle />

        <ContactsList />

        <ChatMessageList />

        <ChatForm />

      </div>
    </div>
    </Provider>
  );
}

export default App;

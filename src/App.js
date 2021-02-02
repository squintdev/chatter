import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="6d7bad61-3577-4fe1-9534-e693cbfbe96d"
            userName="tduffy"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    );
}

export default App;
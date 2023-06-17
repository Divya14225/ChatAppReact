import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import  ChatFeed  from './components/ChatFeed';
import './App.css';
const App=()=>{
    if(!localStorage.getItem('userName')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="d8b67d0a-610c-4dd7-a585-9795cd6057fb"
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;
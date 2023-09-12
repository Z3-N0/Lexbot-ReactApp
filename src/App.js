/* src/App.js */
import React, { useState } from 'react'
import { ConditionallyRender } from "react-util-kit";
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";


const App = ({ signOut, user }) => {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div class="App-header">

      <Heading className="user-intro" level={1}>Hello {user.username}</Heading>
      <Button className= "signout" onClick={signOut}>Sign out</Button>
      
  
      <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText='InterCity Bot'
                botAvatar={ButtonIcon}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
    </div>
  )
}


export default withAuthenticator(App);
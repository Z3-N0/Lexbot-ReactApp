import { Amplify, Interactions } from 'aws-amplify'
//import { AWSLexV2Provider } from '@aws-amplify/interactions';
import awsconfig from './aws-exports';
import { createClientMessage } from 'react-chatbot-kit';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:ee852981-5624-4239-b5dc-93c4b8c505c8',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      Intercity_lexuser
      : {
        name: 'Intercity_lexuser',
        alias: '$LATEST',
        region: 'us-east-1'
      }
    }
  }
});

Amplify.configure(awsconfig);

async function push(message) {
  return new Promise(async (resolve, reject) => {
    const response = await Interactions.send("Intercity_lexuser", message);
    resolve(response.message);
    // resolve(response.messages);
    let errMsg = 'Error contacting bot' 
    reject(errMsg)
  });
  };

  async function fetchColor(values) {
    
    return new Promise(async(resolve, reject) =>{
      fetch('https://vezdu12671.execute-api.us-east-1.amazonaws.com/Stage_1/color-fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
     .then(response => response.json())
      .then(data => {
        resolve(data['body'])
      })
      .catch(error => console.error(error));

    })
  };

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async sendResp(message)
  {
    let updmsg = createClientMessage(message,  {
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);

  }
  

  async handleResp(message) {
   const lowerCaseMessage = message.toLowerCase();
   let resp = await push(lowerCaseMessage)



   
   if (resp === "In what city do you need to rent a car?")
   {
    let updmsg = this.createChatBotMessage(resp,  {
      widget: "CitySelector",
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
   else if (resp === "What city are you going to?")
   {
    let updmsg = this.createChatBotMessage(resp,  {
      widget: "CitySelector",
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
   else if  (resp === "What type of car would you like to rent?")
   {
    let updmsg = this.createChatBotMessage(resp,  {
      widget: "CarTypeSelector",
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
   else if (resp === "What is the preferred gender of your driver?")
   {
    let updmsg = this.createChatBotMessage(resp,  {
      widget: "GenderSelector",
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
   else if (resp === "fetch color")
   {
    let color = await fetchColor(resp)
    let updmsg = this.createChatBotMessage(color,  {
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
   else
   {  
    let updmsg = this.createChatBotMessage(resp,  {
      loading: true,
      terminateLoading: true}) ;
    this.updateChatbotState(updmsg);
   }
  }

  updateChatbotState(message) {
        
       this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
        }))
      }
  
}

export default ActionProvider
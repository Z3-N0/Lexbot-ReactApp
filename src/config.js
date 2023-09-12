import { createChatBotMessage } from 'react-chatbot-kit';
import CitySelector from "./widgets/CitySelector/CitySelector";
import CarTypeSelector from "./widgets/CarTypeSelector/CarTypeSelector";
import GenderSelector from "./widgets/GenderSelector/GenderSelector";
import BotAvatar from './assets/DomainComponents/botAvatar';

const config = { 
  botName: "InterCity",
  initialMessages: [createChatBotMessage("How can I help you?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#576CBC",
      
    },
    chatButton: {
      backgroundColor: "#576CBC",
    },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "CitySelector",
      widgetFunc: (props) => <CitySelector {...props} />,
    },
    {
      widgetName: "CarTypeSelector",
      widgetFunc: (props) => <CarTypeSelector {...props} />,
    },
    {
      widgetName: "GenderSelector",
      widgetFunc: (props) => <GenderSelector {...props} />,
    },
  ]
}

export default config
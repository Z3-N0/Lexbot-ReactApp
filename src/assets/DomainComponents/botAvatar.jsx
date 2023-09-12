import React from "react";
import { ReactComponent as BotIcon } from "../icons/robot.svg";

const BotAvatar = () => {
  return (
    <div className="chat-bot-avatar">
      <div className="chat-bot-avatar-container">
        <BotIcon className="chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default BotAvatar;
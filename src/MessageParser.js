class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async parse(message) {

      this.actionProvider.handleResp(message);

  }
}

export default MessageParser
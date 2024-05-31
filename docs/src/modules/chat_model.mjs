import helper from './helper.mjs';


class ChatModelLoader {
    constructor(options) {
        this.options = options;
        this.initializeChatModel();
    }

    async initializeChatModel() {
        const module = await helper.loadModule(this.options.ChatModel.model);
        return new module[this.options.ChatModel.modelName](this.options.LLMSpecs);
    }

    async invoke(query) {
        return await this.model.invoke(query);

    }
}


export default ChatModelLoader;
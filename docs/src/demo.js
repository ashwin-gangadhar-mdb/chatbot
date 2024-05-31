import chat_model from './modules/chat_model.mjs';
import embedding_model from './modules/embedding.mjs'; 

const options = {
    LLMSpecs: {
        temperature: 1,
        streaming: true,
        openAIApiKey: "sk-************",
    },
    ChatModel: {
        model: '@langchain/openai',
        modelName: "ChatOpenAI"
    },
    Embedding: {
        model: '@langchain/openai',
        modelName: "OpenAIEmbeddings",
    },
    EmbeddingSpecs: {
        openAIApiKey: "sk-************",
    }
};


const modelLoader = new chat_model(options);
const model = await modelLoader.initializeChatModel();

// Model Invocation
model.invoke("Hello, how are you?").then((response) => {
    console.log(response);
});


// Embedding Invocation
const embeddingModelLoader = new embedding_model(options);
const embeddingModel = await embeddingModelLoader.initializeEmbeddingModel();

// Embedding Query
embeddingModel.embedQuery("Hello, how are you?").then((response) => {
    console.log(response);
});
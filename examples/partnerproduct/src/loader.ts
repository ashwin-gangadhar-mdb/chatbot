import 'dotenv/config';
import {
    getDatabaseConfig,
    getIngestLoader,
    getEmbeddingModel,
    getModelClass
} from '../../../src/yaml_parser/src/LoadYaml.js';
import { RAGApplicationBuilder } from "../../../src/index.js";
import { MongoDBAtlas } from "../../../src/vectorDb/mongo-db-atlas.js";
import { exit } from 'process';



// Initialize the RAG application
const llmApplication = await new RAGApplicationBuilder()
    .setModel(getModelClass())
    .setEmbeddingModel(getEmbeddingModel())
    .setVectorDb(getDatabaseConfig())
    .build();

const dataloader = getIngestLoader();
for(const data of dataloader){
    await llmApplication.addLoader(data);
}



// Add the loader
// await llmApplication.addLoader(getIngestLoader());

console.log("-- Data ingersted successfully --")
exit(0);

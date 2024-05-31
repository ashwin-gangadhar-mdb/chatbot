import helper from './helper.mjs';


class EmbeddingModelLoader {
    constructor(options) {
        this.options = options;
    }

    async initializeEmbeddingModel() {
        const module = await helper.loadModule(this.options.Embedding.model);
        return new module[this.options.Embedding.modelName](this.options.EmbeddingSpecs);
    }

    async embedQuery(query) {
        return await this.embeddingInstance.embedQuery(query);
    }

    async embedDocuments(documents) {
        return await this.embeddingInstance.embedDocuments(documents);
    }

}

export default EmbeddingModelLoader;
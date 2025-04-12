import { createGetLLM } from "@llm";

const tasksModelsMap = {

};

const defaultLLMModel = {
    vendor: {
      type: "openai" as const,
    },
    model: "gpt-4o"
};

export const getLLM = createGetLLM(tasksModelsMap, defaultLLMModel);
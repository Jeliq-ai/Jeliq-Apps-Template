import { createGetLLM } from '@llm';

const tasksModelsMap = {};

const defaultLLMModel = {
  vendor: {
    type: 'openai' as const,
  },
  model: 'gpt-5.2',
};

export const getLLM = createGetLLM(tasksModelsMap, defaultLLMModel);

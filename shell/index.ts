import { createShellFunction } from "@core";
import { getBackend, login, logout, checkLogin, resetPasswordForEmail, changePassword } from "@backend";
import * as entities from "@/src/domain/entities/config";
import * as repositoryCreators from "@/src/infra/repositories/index";
import services from "@/src/services/index";
import { getLLM } from "@/src/config/llm";

const authMethods = {
	login, logout, checkLogin, resetPasswordForEmail, changePassword
};

export const execShell = createShellFunction(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entities, getBackend({} as any, {} as any, {} as any), repositoryCreators, authMethods, services, getLLM
);
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { initialize } from "express-openapi";
import cors from "cors";
import cookieParser from "cookie-parser";
import { generateExpressOpenAPIDoc, generateExpressOpenAPIOperations, generateExpressOpenAPIErrorMiddleware, removeExampleKeys } from "@core";
import { getBackend, login, logout, checkLogin, resetPasswordForEmail, changePassword } from "@backend";
import * as operations from "@/src/services/api/operations/index";
import * as schema from "@/src/data/schema";
import apiDoc from "@/src/services/api/schema.json";
import * as OpenApiValidator from 'express-openapi-validator';

const apiSpec = generateExpressOpenAPIDoc(apiDoc);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(
	OpenApiValidator.middleware({
		apiSpec: removeExampleKeys(apiSpec),
		validateApiSpec: true,
		validateRequests: {
			allErrors: true,
		},
		validateResponses: false,
	}),
);

const PORT = process?.env?.PORT || 6000;
app.listen(PORT, () => {
	console.log("Start on port " + PORT);
});

const backend = (req: Request, res: Response, next: NextFunction) => getBackend(req, res, next);
const authMethods = {
	login, logout, checkLogin, resetPasswordForEmail, changePassword
};

initialize({
	app: app,
	apiDoc: apiSpec,
	validateApiDoc: true,
	operations: generateExpressOpenAPIOperations(operations, schema, backend, authMethods),
    consumesMiddleware: {
        'application/json': express.json(),
    },
	errorMiddleware: generateExpressOpenAPIErrorMiddleware(),
});


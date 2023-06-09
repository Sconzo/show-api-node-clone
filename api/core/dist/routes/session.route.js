"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoute = void 0;
const express_1 = require("express");
const SessionController_1 = require("../modules/session/SessionController");
const controller = new SessionController_1.SessionController();
const sessionRoute = (0, express_1.Router)();
exports.sessionRoute = sessionRoute;
sessionRoute.post("/", controller.createSessionHandle);
sessionRoute.get("/all", controller.getAllSessionsHandle);
sessionRoute.get("/:id", controller.getOneSessionHandle);
sessionRoute.get("/questions-created/:id", controller.getNumberQuestionsCreatedHandle);

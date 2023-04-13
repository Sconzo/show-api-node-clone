import {NextFunction, Request, Response} from "express";
import {SessionService} from "./SessionService";

const service = new SessionService();

export class SessionController {

    async createSessionHandle(req: Request, res: Response, next: NextFunction) {
        const {
            sessionName,
            numberOfQuestions,
            numberOfGroups,
            numberOfChallengers,
            cards,
            studentsHelp,
            skips,
            audienceHelp
        } = req.body;

        try {
            const result = service.createSession({
                sessionName,
                numberOfQuestions,
                numberOfGroups,
                numberOfChallengers,
                cards,
                studentsHelp,
                skips,
                audienceHelp
            })
            return res.status(201).json(result);

        } catch (error) {
            console.log(error)
            next(error);
        }

    }

    async getAllSessionsHandle(req: Request, res: Response) {
        try {
            const result = await service.getAllSessions();
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json("Error while fetching Sessions");
        }

    }

    async getNumberQuestionsCreatedHandle(req: Request, res: Response) {

        const result = await service.getNumberQuestionsCreated(parseInt(req.params.id));

        return res.status(200).json(result);
    }

    async getOneSessionHandle(req: Request, res: Response) {

        const result = await service.getOneSession(parseInt(req.params.id))

        return res.status(200).json(result)
    }
}
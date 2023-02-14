import { IncomingMessage, ServerResponse } from "http";
import Route, { notFound, getRoute } from "./routes";

export default class {

    static requestObservable(req: IncomingMessage, res: ServerResponse) {

        const route: Route | undefined = getRoute(req.url as string)

        if (route) {
            route.resolve(req, res)
        } else {
            notFound(req, res)
        }
    }
}


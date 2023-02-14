import http from "http"

export default interface Route {
    path: string
    resolve: (
        req: http.IncomingMessage,
        res: http.ServerResponse
    ) => void
}

const routes: Route[] = [
    {
        path: '/user/description',
        resolve:(req: http.IncomingMessage, res: http.ServerResponse) => {
            res.writeHead(200, { 'content-Type': 'application/plain'})
            res.write('User: Geovanny Mesa')
            res.end()
        }
    },
    {
        path: '/user/list',
        resolve:(req: http.IncomingMessage, res: http.ServerResponse) => {
        res.writeHead(200, { 'content-Type': 'application/json'})
        res.write(
            JSON.stringify([
                { nickname: 'Sara', active: true},
                { nickname: 'Milena', active: true},
                { nickname: 'Juan David', active: true},
                { nickname: 'Geovanny', active: true},
                { nickname: 'Jeimy', active: true},
                { nickname: 'Orlando', active: true},
            ])
        )
        res.end();
        }
    }
]

export const getRoute = (path: string): Route | undefined => routes.find((route: Route) => route.path === path) 

export const notFound = (
    req: http.IncomingMessage,
    res: http.ServerResponse
): void => {
    res.writeHead(400, { 'content-Type': 'text/plain' })
    res.end('Route not found')
}






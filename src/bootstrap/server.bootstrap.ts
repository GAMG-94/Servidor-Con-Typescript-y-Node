import http, { IncomingMessage, ServerResponse } from 'http'

export abstract class Bootstrap {
    // implementan el patron de diseño, no tiene comportamiento
    abstract initialize(): Promise<string | Error>
}

export default class extends Bootstrap {

    constructor (
        private readonly requestObservable: (
            req: http.IncomingMessage,
            res: http.ServerResponse
        ) => void
    ) {
        super()
    }

    initialize(){
        return new Promise<string | Error> ((resolve, reject)=>{
            const server = http.createServer(this.requestObservable)

            server
                .listen(3000)
                .on("listening",() => {
                    resolve("Promise resolve server Successfully")
                    console.log("Listening on port: 3000")
                })

                .on("error", (error) => {
                    reject(error)
                    console.log(error)
                })
        })
    }

}



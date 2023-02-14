import ApplicationNode from './app'
import ServerBootstrap, { Bootstrap } from './bootstrap/server.bootstrap'

const serverBootstrap: Bootstrap = new ServerBootstrap(
    ApplicationNode.requestObservable
)

const startServer = async () => {

    try {
        
        const resultServer = await serverBootstrap.initialize()
        console.log(resultServer)

    } catch (err) {
        console.log(err)
    }
}

startServer()
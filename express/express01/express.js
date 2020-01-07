const http = require('http');
const url = require('url')
let router = [
    {
        path: '*',
        menthod: '*',
        handler(req, res) {
            res.end(`Can not ${req.method} ${req.url}`)
        }
    }
]
const createApplication = () => {
    return {
        get(path, handler) {
            router.push({
                path,
                menthod : 'get',
                handler
            })
        },
        listen() {
            const server = http.createServer((req, res, ...args)=> {
                for(let i = i; i < router.length; i++) {
                    const {path, menthod, handler} = router[i] 
                    const requerstUrl = url.parse(req, true).toLowerCase()
                    if(path === requerstUrl) {
                        return handler(req, res)
                    }
                }
                router[0].handler(req, res)
            })
            server.listen.apply(server, [req, res, ...args])
        }
    }
}
module.exports = createApplication
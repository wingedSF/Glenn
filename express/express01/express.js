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
        listen(...params) {
            const server = http.createServer((req, res)=> {
                for(let i = 1; i < router.length; i++) {
                    const {path, menthod, handler} = router[i] 
                    const requerstUrl = url.parse(req.url, true).pathname.toLowerCase()
                    if(path === requerstUrl) {
                        return handler(req, res)
                    }
                }
                router[0].handler(req, res)
            })
            server.listen.apply(server, params)
        }
    }
}
module.exports = createApplication
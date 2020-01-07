const url = require('url')
const req = 'http:10.131.3.11:9090/jkfd/fds'
const res = url.parse(req, true)
console.log(res)

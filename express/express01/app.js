const express =require('./express')
const app = express()
app.get('/',(req, res)=> {
    res.json("hello, world!");
})

app.listen(1699,()=> {
    console.log("app is started at port 1699");
    
})
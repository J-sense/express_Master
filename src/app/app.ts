import express, { NextFunction,Request, Response} from 'express'
const app = express()
const port = 3000;
app.use(express.json())
const logger = (req:Request,res:Response, next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname)
    next();
}
app.get('/',logger,(req:Request, res:Response) => {
  res.send('Hello warrrrr!');
 
})
app.post('/',logger,(req,res)=>{
    console.log(req.body)
    res.send("kjfkldjsf")
})


export default app;
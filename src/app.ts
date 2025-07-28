import express, { NextFunction, Response,Request } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';

const app = express();

app.use(express.json());

// Routes
//Http methods;
app.get('/', (req,res,next) =>{
    res.json({message: "Welcome to elib api"})
})


app.use('/api/users',userRouter);

//Global error handler
app.use(globalErrorHandler);


export default app;
import exprees from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import studentanswersRoutes from './router/StudentAnswers.router.js';
import linkRoutes from './router/Link.routes.js';
import streamrouter from './router/Streams.routes.js';
import subjectrouter from './router/Subject.routes.js';

const app = exprees();
dotenv.config();

//mongoose connection

const connect = () => {
    try{
        mongoose.connect(process.env.MONG_URL)
                .then(()=>{ console.log('connect db')})
    }catch(err){
        throw(err);
    }
}

//error handling
app.use((err, req, res, next) => {
    const status = err.status || process.env.PORT
    const message = err.message || "somthing went wrong";

    return res.status(status).json({
        success: false,
        message: message,
        status: status,
    });
});



//middleware
app.use(exprees.json());

app.use('/studentanswers', studentanswersRoutes);
app.use('/link',linkRoutes);
app.use('/stream', streamrouter);
app.use('/subject', subjectrouter);

//port connecting
app.listen(process.env.PORT, ()=>{
    connect();
    console.log("port is running");
})
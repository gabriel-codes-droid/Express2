import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 8000;
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

//setup static  folder

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     // res.send({message:'Hello World'});
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
// app.get('/about',(req,res)=>{
// //     res.sendFile(path.join(__dirname,'public','about.html'));
// });
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended :false}));

//Logger middleware

app.use(logger);

//Routes
app.use('/api/posts',posts);




//Error handler
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>
{
    console.log(`Server listening on port ${port}`);
})
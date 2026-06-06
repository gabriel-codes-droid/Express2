import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import {fileURLToPath} from 'url';

//Get the directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 8000;
//setup static  folder

app.use(express.static(path.join(__dirname,'public')));

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
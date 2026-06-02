const express =require('express');
const path =require('path');
const app = express();
const port = process.env.PORT || 8000;
const posts =require('./routes/posts');

//setup static  folder

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     // res.send({message:'Hello World'});
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
// app.get('/about',(req,res)=>{
// //     res.sendFile(path.join(__dirname,'public','about.html'));
// });
//
app.use('/api/posts',posts);
app.listen(port,()=>
{
    console.log(`Server listening on port ${port}`);
})
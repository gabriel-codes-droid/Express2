const express =require('express');
const app = express();
app.get('/',(req,res)=>{
    // res.send({message:'Hello World'});
    res.send('Hello World');
});
app.get('/about',(req,res)=>{
    res.send('About');
});
app.listen(8000,()=>
{
    console.log(`Server listening on port 8000`);
})
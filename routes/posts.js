const express =require('express')
const router = express.Router()
let posts =[
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'},
    {id:3, title:'Post Three'}
]
//Get all posts 
router.get('/',(req,res)=>{
    const limit =parseInt(req.query.limit)
   //console.log(req.query);
   if(!isNaN(limit) && limit >0){
    res.json(posts.slice(0,limit));
   }else {
    res.json(posts);
   }
    
})

//Get a single post 
router.get('/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    // res.json(posts.filter((posts)=>posts.id===id));
    const post =posts.find((post) => post.id===id);
    if (!post){
        return res.status(404).json({msg:`A post with the id ${id} was not found`})
    }

        res.status(200).json(post);
    
});
export default router;
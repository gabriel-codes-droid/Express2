import express from 'express';
const router = express.Router()
let posts =[
    {id:1, title:'Post One'},
    {id:2, title:'Post Two'},
    {id:3, title:'Post Three'}
];

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
router.get('/:id',(req,res,next)=>{
    const id =parseInt(req.params.id)
    // res.json(posts.filter((posts)=>posts.id===id));
    const post =posts.find((post) => post.id===id);
    if (!post){
         const error= new Error(`A post with the id ${id} was not found`);
          return next(error)
    }

        res.status(200).json(post);
    
});
//create new post
router.post('/',(req,res)=>{
    // console.log(req.body);
    const newPost={
        id:posts.length + 1,
        title:req.body.title
    };
    if (!newPost.title){
        return res.status(400).json({msg:'Please include a title'})
    }
    posts.push(newPost);

    res.status(201).json(posts)
})
//update post
router.put('/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const post =posts.find((post)=>post.id===id)

    if(!post){
        return res
        .status(404)
        .json({msg:`A post with id ${id} wasnt found`})
    }

    post.title =req.body.title;
    res.status(200).json(posts);
})
//delete post
router.delete('/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    const post =posts.find((post)=>post.id===id)

    if(!post){
        return res
        .status(404)
        .json({msg:`A post with id ${id} wasnt found`})
    }

    posts = posts.filter((post)=>post.id!==id);
    res.status(200).json({msg:`Post with id ${id} deleted`});
})
export default router;
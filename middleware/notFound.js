 const notFound = (req,res,next)=>{
    const error =new Error('Not FOund');
    error.status=404;
    next(error);

 };

export default notFound;
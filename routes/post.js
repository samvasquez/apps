const { json } = require("body-parser");
const post = require("../modelos/post");

Router.post('/',async(req,res)=>{

const post = new post({
    title :req.body.title,
    description :req.body .description
});
try {
    const savedPost =await post.save ();

    res.json(savedPost);
    
} catch (error) {

    res.json({message:error});
    
}

});

Router.get('/:postId',async(req,res)=>{
    try { 
        const post = await post.findbyId(req.params.postId);
        res.json(post);
        
    } catch (error) {

        res,json({message:error})
        
    }
});

Router.delete('/:postId',async(req,res)=>{
    try {
        const removedPost= await post.remove({_id:req.params.postId});
        res.json(removedPost)
    } catch (error) {
        res.json({message:error});
        
    }
});

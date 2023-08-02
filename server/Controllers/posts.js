import PostMessage from "../models/postMessages.js";
export const getPosts = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.staus(404).json({message: error.message})
    }
    res.send("This Actually works");
}

export const createPosts= async(req,res)=>{
    const post = req.body;
    newPost = new PostMessage(post);
    res.status(201).json(newPost);
   try {
    await newPost.save()
   } catch (error) {
    res.status(409).json({message: error.message})
   }
}
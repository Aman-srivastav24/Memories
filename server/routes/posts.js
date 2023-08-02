import express from 'express';
import { getPosts , createPosts} from '../Controllers/posts.js';
const router = express.Router();

router.get('/',getPosts);
router.get('/',createPosts);

export default router;



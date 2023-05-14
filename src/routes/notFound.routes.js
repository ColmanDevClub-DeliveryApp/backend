import express from "express"

const router = express.Router();

router.get('*', (req, res)=>{
    res.status(404).sendFile(process.cwd() + '/src/notFoundPage/index.html');
});

export default router;

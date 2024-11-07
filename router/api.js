import express from "express";
import * as controller from "../app/controllers/blogControllers.js"

const router = express.Router();

router.post("/create-blog", controller.creatBlog)

router.get("/read-blog", controller.readBlog)

router.put("/update-blog", controller.updateBlog)

router.delete("/delete-blog", controller.deleteBlog)


export default router;
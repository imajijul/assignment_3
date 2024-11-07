import express from "express";
import * as controller from "../app/controllers/controllers.js"

const router = express.Router();

router.post("/create-blog", controller.createRoute)

router.get("/read-blog", controller.readRoute)

router.put("/update-blog", controller.updateRoute)

router.delete("/delete-blog", controller.deleteRoute)


export default router;
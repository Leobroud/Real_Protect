import express from "express"
import DataController from '../controller/dataController'


export const router = express.Router()


router.get("/getList/:month/:limit", DataController.getList )
router.get("/getMessage/:message/:limit", DataController.getMessage )
router.post("/insertData", DataController.insertData)


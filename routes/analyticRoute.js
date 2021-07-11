import express from 'express';
import app from '../app.js';
import catchAsync from "../utilities/catchAsync.js";
import validateIP from '../utilities/Validation/validateIP.js';
import postAnalytics from "../controllers/storeController.js";
import getAnalytics from "../controllers/fetchController.js";

const router = express.Router();
router.post("/analytics", validateIP, catchAsync(postAnalytics));
router.get("/analytics", catchAsync(getAnalytics));

export default router;
import express from 'express';
import app from '../app';
import validateIP from '../../utilities/Validation/validateIP';
import storeController from '../controllers/storeController';
import fetchController from '../controllers/fetchController';

const router = express.Router();
router.route('/analytics').post(storeController.postAnalytics).get(validateIP.validateIP, fetchController.getAnalytics);

export default router;
import express from 'express';
import { getStatus, joinQueue, leaveQueue } from '../controllers/queueCOntroller.js';

const queueRouter = express.Router();

queueRouter.post('/join', joinQueue);
queueRouter.get('/status/:userId', getStatus);
queueRouter.delete('/leave/:userId', leaveQueue);

export default queueRouter;

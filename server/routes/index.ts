import {Router} from "express";
const router = Router()

import userRouter from './userRouter.js';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';
import deviceRouter from './deviceRouter.js';

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

export default router
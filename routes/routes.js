import express from 'express';
import {getUser, removeAccess, shareAccess} from '../controller/shareAccess.js'

const router = express.Router();

router.post('/shareAccess',shareAccess);
router.get('/getResponse/:userId',getUser);
router.put('/removeAccess',removeAccess)

export default router;
import { Router } from 'express';

import MedicalRecord from '../controller/index';
const { getAll, createOne } =MedicalRecord;

const router=Router();

router.get('/', getAll);

export default router;

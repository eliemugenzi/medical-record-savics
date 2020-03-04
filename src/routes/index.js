import { Router } from 'express';

import MedicalRecord from '../controller/index';
const { getAll, createOne, getMedicalRecords } =MedicalRecord;

const router=Router();

router.get('/', getAll);
router.post('/', createOne);

router.get('/records', getMedicalRecords);

export default router;

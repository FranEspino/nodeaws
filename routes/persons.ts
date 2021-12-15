import {Router} from 'express'
import { getPersons } from '../controllers/persons';
const router = Router();

router.get("/persons",getPersons);

export default router;
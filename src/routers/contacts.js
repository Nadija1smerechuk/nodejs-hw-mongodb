import { Router } from "express";
import {
    getMainController,
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    patchContactController,

} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();



router.get('/', ctrlWrapper(getMainController));

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/contacts',  validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/contacts/:contactId', isValidId, validateBody(updateContactSchema), ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.post('/register', validateBody(createContactSchema), ctrlWrapper(createContactController),
);

router.use(authenticate);

router.get(
    '/',
    ctrlWrapper(getContactsController)
);

export default router;




import { Router } from 'express';
import upload from '../helpers/multerConfig.js';

import { uploadImage } from '../api/controllers/upload.controller.js';

const uploadRouter = Router();

// upload image
uploadRouter.post('/upload', upload.single('file'), uploadImage);

export default uploadRouter;

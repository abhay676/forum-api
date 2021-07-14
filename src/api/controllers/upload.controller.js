import fs from 'fs';
import { uploadService } from '../services/upload.service.js';
import { sendResponse } from '../utils/Response.js';
import {
UPLOAD
} from '../utils/Messages.js';
export const uploadImage = async (req, res, next) => {
  try {
    const fileName = req.file.originalname;
    const image = new Buffer(fs.readFileSync(req.file.path)).toString('base64');
    const upload = await uploadService.upload(image, fileName);
   return sendResponse(res, 200, UPLOAD, upload, null);
  } catch (error) {
    next(error);
  }
};

import fs from 'fs';
import { uploadService } from '../services/upload.service.js';
export const uploadImage = async (req, res, next) => {
  try {
    const fileName = req.file.originalname;
    const image = new Buffer(fs.readFileSync(req.file.path)).toString('base64');
    const upload = await uploadService.upload(image, fileName);
    return res.status(200).send(upload);
  } catch (error) {
    next(error);
  }
};

import ImageKit from 'imagekit';
import { environment } from '../../config/environment.js';
import { CustomError } from '../utils/CustomError.js';
export const uploadService = {
  async upload(file, fileName) {
    try {
      let imagekit = new ImageKit({
        publicKey: environment.IMAGEKIT_PUBLIC_KEY,
        privateKey: environment.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: 'https://ik.imagekit.io/frm',
      });

      const upload = await imagekit.upload({
        file,
        fileName,
      });
      return upload;
    } catch (error) {
      throw new CustomError(404, error.message, error.message, 'THIRD_PARTY_ERROR');
    }
  },
};

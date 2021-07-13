import ImageKit from 'imagekit';
import { environment } from '../../config/environment.js';
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
      console.log('upload error: ', error);
      return error;
    }
  },
};

import uniqueID from 'uniqid';
import { environment } from '../../config/environment.js';
export const generateShareLink = async () => {
  const id = await uniqueID();
  let url;
  if (environment.IS_PROD) url = `${environment.PROD_URL}/qd?q=${id}`;
  url = `http://localhost:${environment.PORT}/qd?q=${id}`;
  return [url, id];
};

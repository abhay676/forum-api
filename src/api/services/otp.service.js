import moment from 'moment';
import otpGenerator from 'otp-generator';
import db from '../../db/connection.js';
import { CustomError } from '../utils/CustomError.js';

export const OTPService = {
  AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  },
  async generateOTP({ userID }) {
    const otp = await otpGenerator.generate(6, {
      upperCase: false,
      specialChars: false,
    });
    const now = new Date();
    const expiration_time = this.AddMinutesToDate(now, 5);
    try {
      const result = await db.otp.create({
        otp: otp,
        userID,
        expirationTime: expiration_time,
      });
      return result;
    } catch (error) {
      return error;
    }
  },
  async verifyOTP(otpData) {
    try {
      const otp = await db.otp.findOne({
        where: {
          otp: otpData,
        },
      });
      if (!otp) {
        throw new Error('OTP is not valid now');
      }
      const createdAt = moment();
      const expireAt = moment(otp.expirationTime);
      const diff = expireAt.diff(createdAt, 'minutes', true);
      if (diff > 0) {
        const userID = otp.userID;
        await db.otp.destroy({
          where: {
            otp: otpData,
          },
        });
        return [true, userID];
      } else {
        await db.otp.destroy({
          where: {
            otp: otpData,
          },
        });
        throw new Error('OTP is expired');
      }
    } catch (error) {
      throw new CustomError(404, error.message, error.message, '/verify');
    }
  },
};

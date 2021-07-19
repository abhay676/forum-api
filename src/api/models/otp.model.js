const OTP = (sequelize, DataTypes) => {
  const otp = sequelize.define(
    'otp',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      otp: { type: DataTypes.STRING, allowNull: false, unique: true },
      expirationTime: { type: DataTypes.DATE, allowNull: false },
    },
    { createdAt: true, updatedAt: true, tableName: 'otp' }
  );
  return otp;
};

export default OTP;

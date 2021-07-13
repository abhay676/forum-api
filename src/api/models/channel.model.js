const Channel = (sequelize, DataTypes) => {
  const channel = sequelize.define(
    'channel',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      status: {
        type: DataTypes.ENUM,
        values: ["0", "1", "2"], // 2 -> deleted, 0 -> in-active, 1 -> active
        defaultValue: "1",
      },
    },
    { createdAt: true, updatedAt: true, tableName: 'channels' }
  );
  return channel
};

export default  Channel
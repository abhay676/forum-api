const Reply = (sequelize, DataTypes) => {
  const replies = sequelize.define(
    'replies',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      type: { type: DataTypes.ENUM, values: ['0', '1'], allowNull: false }, // 0 -> Question, 1 -> Answer
      reply: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['0', '1', '2'],
        defaultValue: '1',
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      tableName: 'replies',
    }
  );
  return replies;
};

export default Reply;

const Answer = (sequelize, DataTypes) => {
  const answer = sequelize.define(
    'answers',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      description: { type: DataTypes.TEXT, allowNull: false },
      status: {
        type: DataTypes.ENUM,
        values: ['0', '1', '2'],
        defaultValue: '1',
      },
      isAccepted: { type: DataTypes.BOOLEAN, defaultValue: false },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      tableName: 'answers',
    }
  );
  return answer;
};

export default Answer;

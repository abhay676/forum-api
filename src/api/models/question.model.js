const Question = (sequelize, DataTypes) => {
  const question = sequelize.define(
    'questions',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      heading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      shareURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shareID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      verifiedSolution: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['0', '1', '2'], // 2 -> deleted, 0 -> in-active, 1 -> active
        defaultValue: '1',
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      views: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'questions',
    }
  );
  return question;
};

export default Question;

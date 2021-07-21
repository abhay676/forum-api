const User = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'users',
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      activeToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      question: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ['0', '1', '2'], // 2 -> deleted, 0 -> in-active, 1 -> active
        defaultValue: '1',
      },
      userAgent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: true,
      updatedAt: true,
      tableName: 'users',
    }
  );
  return user;
};

export default User;

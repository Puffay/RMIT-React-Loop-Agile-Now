module.exports = (sequelize, DataTypes) =>
  sequelize.define("post", {
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
      get() {
        if (this.getDataValue('image')) {
          return this.getDataValue('image').toString('utf8');
        }
        return undefined;
      },
    }
  }, {
    // Don't add the timestamp attributes (updatedAt, createdAt).
    timestamps: true
  });

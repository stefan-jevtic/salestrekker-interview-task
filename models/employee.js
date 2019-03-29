module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employees', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: DataTypes.INTEGER
      },
      {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      }
    );

    Employee.associate = models => {
        Employee.belongsTo(models.Roles);
    }

    return Employee;
}
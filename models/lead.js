module.exports = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Leads', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        category: DataTypes.STRING
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    );
  
    Lead.associate = (models) => {
        Lead.hasOne(models.Persons);
        Lead.hasOne(models.Companies);
    };
  
    return Lead;
}
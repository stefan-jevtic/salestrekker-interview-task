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
        company_id: DataTypes.INTEGER,
        person_id: DataTypes.INTEGER,
        category: DataTypes.STRING
      },
      {
        freezeTableName: true,
      }
    );
  
    Lead.associate = (models) => {
        Lead.hasMany(models.Persons);
        Lead.hasMany(models.Companies);
    };
  
    return Lead;
}
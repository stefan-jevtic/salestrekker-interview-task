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
        timestamps: false
      }
    );
  
    Lead.associate = (models) => {
        Lead.hasOne(models.Persons, {foreignKey: 'id'});
        Lead.hasMany(models.Companies, {foreignKey: 'id'});
    };
  
    return Lead;
}
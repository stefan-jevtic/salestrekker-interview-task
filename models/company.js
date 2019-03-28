module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Companies', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        contactPerson: DataTypes.STRING,
        website: DataTypes.STRING
      },
      {
        freezeTableName: true,
      }
    );
  
    Company.associate = (models) => {
        Company.belongsTo(models.Leads);
    };
  
    return Company;
}
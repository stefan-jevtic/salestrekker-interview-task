module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Companies', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        contact_person: DataTypes.STRING,
        website: DataTypes.STRING
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    );
  
    Company.associate = (models) => {
        Company.belongsTo(models.Leads, {foreignKey: 'id'});
    };
  
    return Company;
}
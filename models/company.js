module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Companies', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        contact_person: DataTypes.STRING,
        website: DataTypes.STRING,
        lead_id: DataTypes.INTEGER
      },
      {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      }
    );
  
    Company.associate = (models) => {
        Company.belongsTo(models.Leads);
    };
  
    return Company;
}
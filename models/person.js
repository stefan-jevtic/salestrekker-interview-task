module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Persons', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        last_name: DataTypes.STRING,
        gender: DataTypes.STRING
      },
      {
        freezeTableName: true,
        timestamps: false
      }
    );
  
    Person.associate = (models) => {
        Person.belongsTo(models.Leads, {foreignKey: 'id'});
    };
  
    return Person;
}
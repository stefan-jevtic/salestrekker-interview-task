module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Persons', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        lastName: DataTypes.STRING,
        gender: DataTypes.STRING
      },
      {
        freezeTableName: true,
      }
    );
  
    Person.associate = (models) => {
        Person.belongsTo(models.Leads);
    };
  
    return Person;
}
module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define(
        'Persons',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            last_name: DataTypes.STRING,
            gender: DataTypes.STRING,
            lead_id: DataTypes.INTEGER,
        },
        {
            freezeTableName: true,
            timestamps: false,
            underscored: true,
        }
    )

    Person.associate = models => {
        Person.belongsTo(models.Leads)
    }

    return Person
}

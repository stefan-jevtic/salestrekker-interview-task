module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        'Roles',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
        },
        {
            freezeTableName: true,
            timestamps: false,
            underscored: true,
        }
    )

    Role.associate = models => {
        Role.hasOne(models.Employees)
    }

    return Role
}

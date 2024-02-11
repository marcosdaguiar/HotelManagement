module.exports = (sequelize, DataTypes) => {

    const Rooms = sequelize.define("Rooms", {
        guest_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        guest_firtname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_zip: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        guest_phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_balance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guest_notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Rooms;
}
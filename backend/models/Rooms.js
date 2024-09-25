module.exports = (sequelize, DataTypes) => {

const Room = sequelize.define(
    'rooms',
    {
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        room_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_bed_size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_bed_count: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_view: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_booked: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        room_notes: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        room_price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Room;
}

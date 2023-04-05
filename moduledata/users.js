const sequelize = require("../config/sequelize");
const DataTypes = require('sequelize');


const Users = sequelize.define('Users', {
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.TEXT,
    },
});


module.exports = Users;

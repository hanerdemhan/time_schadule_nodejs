const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Time = sequelize.define('meet_table',{
    yil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gun: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dakika: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
const Message = sequelize.define('meet_table',{
        message: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    }
  )

const Mentor = sequelize.define('meet_table', {
  
    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  
const Mentee = sequelize.define('meet_table', {

    mentee_id: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  
module.exports={ Mentee, Time, Message};
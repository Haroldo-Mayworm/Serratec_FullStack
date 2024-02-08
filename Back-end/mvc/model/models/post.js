const db = require('./dbConnection');
const post = db.sequelize.define(
    'post_list',{
        title:{
            type: db.Sequelize.STRING,
        },
        content:{
            type: db.Sequelize.TEXT,
        }
    }
)

post.sync({});

module.exports = post;

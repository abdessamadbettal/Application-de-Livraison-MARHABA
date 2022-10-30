const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./UserModel");
db.role = require("./RoleModel");

db.role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
        new db.role({
            name: "manager"
        })
        .save(err => {
            if(err) {console.log("error", err)}
            console.log("added 'manager' to roles collection");
        });

        new db.role({
            name: "client"
        })
        .save(err => {
            if(err) {console.log("error", err)}
            console.log("added 'client' to roles collection");
        });

        new db.role({
            name: "livreur"
        })
        .save(err => {
            if(err) {console.log("error", err)}
            console.log("added 'livreur' to roles collection");
        });
    }
});

module.exports = db;
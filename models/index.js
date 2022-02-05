'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		logging: true,
	}
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

//Associations

//permissions
// db.query.hasMany(db.query_log);
db.products.hasMany(db.manufacturers, { foreignKey: 'Product_ID' });
db.request.hasMany(db.request_items, { foreignKey: 'Request_ID' });
db.request.belongsTo(db.location, {
	foreignKey: 'Location_ID',
	sourceKey: 'ID',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

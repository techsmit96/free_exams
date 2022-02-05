'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'subject',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			Code: {
				type: DataTypes.STRING(20),
				allowNull: true,
				unique: true,
			},
			Name: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
			Description: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			Status: {
				type: DataTypes.ENUM('Active', 'In Active'),
				allowNull: false,
				defaultValue: 'Active',
			},
		},
		{
			freezeTableName: true,
			engine: 'InnoDB',
			charset: 'utf8mb4',
			// underscored: true,
			paranoid: true,
			timestamps: true,
			createdAt: 'Created_At',
			updatedAt: 'Updated_At',
			deletedAt: 'Deleted_At',
			individualHooks: true,
		}
	);

	return model;
};

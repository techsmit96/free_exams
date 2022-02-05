'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'question_bank',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			Type: {
				type: DataTypes.ENUM('Single', 'Multiple'),
				allowNull: false,
				defaultValue: 'Single',
			},
			Subject_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Question: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			Option_A: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			Option_B: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			Option_C: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			Option_D: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			Correct_Option: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			Correct_Score: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			Not_Attempt: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			Wrong_Score: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			Explanation: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			Difficulty_Level: {
				type: DataTypes.INTEGER,
				allowNull: false,
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

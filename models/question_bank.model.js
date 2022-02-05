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
				type: Sequelize.ENUM('Single', 'Multiple'),
				allowNull: false,
				defaultValue: 'Single',
			},
			Subject_ID: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			Question: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			Option_A: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			Option_B: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			Option_C: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			Option_D: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			Correct_Option: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			Correct_Score: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			Not_Attempt: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			Wrong_Score: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			Explanation: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			Difficulty_Level: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			Status: {
				type: Sequelize.ENUM('Active', 'In Active'),
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

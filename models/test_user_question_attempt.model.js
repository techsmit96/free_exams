'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'test_user_question_attempt',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			Test_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			User_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Question_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			Answer: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			Correct_Answer: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			For_Review_Flag: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: 0,
			},
			For_Seen_Flag: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: 0,
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

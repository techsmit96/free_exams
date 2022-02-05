'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'test_user_mapping',
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
			Questions: {
				// question order ID show
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: '[]',
			},
			Option_Order: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: '[]',
			},
			Attempts: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			Last_Attempt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			Status: {
				type: DataTypes.ENUM('Not Started', 'Started', 'Completed'),
				allowNull: false,
				defaultValue: 'Not Started',
			},
			Remaining_Time: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			Marks_Obtained: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			Marks_Out_Off: {
				type: DataTypes.INTEGER,
				allowNull: true,
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

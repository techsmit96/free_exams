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
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			User_ID: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			Questions: {
				// question order ID show
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: '[]',
			},
			Option_Order: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: '[]',
			},
			Attempts: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			Last_Attempt: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			Status: {
				type: Sequelize.ENUM('Not Started', 'Started', 'Completed'),
				allowNull: false,
				defaultValue: 'Not Started',
			},
			Remaining_Time: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			Marks_Obtained: {
				type: Sequelize.FLOAT,
				allowNull: true,
			},
			Marks_Out_Off: {
				type: Sequelize.INTEGER,
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

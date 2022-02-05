'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'test_subject_marks',
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
			Subject_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			User_ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
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

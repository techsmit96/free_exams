'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'test',
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			Test_Name: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			Total_No_Of_Question: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},		
			Enrolled: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			Total_Time: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			Start_Time: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			End_Time: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			From_Time: {
				type: DataTypes.TIME,
				allowNull: false,
			},
			To_Time: {
				type: DataTypes.TIME,
				allowNull: false,
			},
			Is_Question_Navigation: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			Is_Show_Response: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			Is_Show_Explanation: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
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

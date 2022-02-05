'use strict';

module.exports = (sequelize, DataTypes) => {
	const model = sequelize.define(
		'test_subject_item',
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
			Subject_ID: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			Difficulty_Level: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			No_Of_Question: {
				type: Sequelize.INTEGER,
				allowNull: false,
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

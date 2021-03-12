module.exports = {
	client: 'postgresql',
	connection: {
		database: 'case',
		user: 'postgres',
		password: '031100rsc'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
